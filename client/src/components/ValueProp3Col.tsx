import {
  ArrowRight,
  Users,
  Calendar,
  Star,
  CheckCircle,
  Play,
} from "lucide-react";

export default function ValueProp() {
  return (
    <div className="p-4 max-w-3xl mx-auto mb-4">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 ">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto rounded-md bg-/10 flex items-center justify-center text-bluet-700 bg-blue-700/10 mb-3">
            <Calendar size={20} />
          </div>
          <p className="font-bold">May 19, 2025</p>
          <p className="text-sm text-foreground/60">7:00 PM BST</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 mx-auto rounded-md bg-secondary/10 flex items-center justify-center text-secondary mb-3">
            <Users size={20} />
          </div>
          <p className="font-bold">10,000+</p>
          <p className="text-sm text-foreground/60">Clients trained</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 mx-auto rounded-md flex items-center justify-center text-green-700 bg-green-700/10 mb-3">
            <Star size={20} />
          </div>
          <p className="font-bold">4.5 Rated</p>
          <p className="text-sm text-foreground/60">Verified reviews</p>
        </div>
      </div>
    </div>
  );
}
