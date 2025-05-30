import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { registrationSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for handling webinar registrations
  app.post("/api/register", async (req, res) => {
    try {
      // Validate request body
      const validatedData = registrationSchema.parse(req.body);
      
      // Create registration in storage
      const registration = await storage.createRegistration({
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        experience: validatedData.experience || "",
        goals: validatedData.goals || "",
        registeredAt: new Date().toISOString(),
      });
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Registration successful",
        data: registration
      });
    } catch (error) {
      if (error instanceof Error) {
        // Handle validation errors
        if (error.name === "ZodError") {
          const validationError = fromZodError(error);
          return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: validationError.message
          });
        }
        
        // Handle other errors
        console.error("Registration error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to process registration"
        });
      }
    }
  });

  // Get webinar statistics route (used for displaying counter of registrants)
  app.get("/api/webinar/stats", async (_req, res) => {
    try {
      const registrationCount = await storage.getRegistrationCount();
      
      res.json({
        success: true,
        data: {
          registrationCount,
          spotsRemaining: 100 - registrationCount, // Assuming 100 total spots
          webinarDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
        }
      });
    } catch (error) {
      console.error("Error fetching webinar stats:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch webinar statistics"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
