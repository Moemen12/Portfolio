import { Badge } from "@/components/ui/badge";
import { PackagesParams } from "@/types";
import Link from "next/link";

const BackPackageCard = ({ pkg }: { pkg: PackagesParams }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-tertiary rounded-[20px] gap-2">
      <h3 className="text-white text-[20px] font-bold text-center">
        V {pkg.version}
      </h3>

      <div className="flex items-center gap-6">
        <Link href={pkg.github_url} target="_blank">
          <Badge variant="outline" className="bg-black border-black">
            github
          </Badge>
        </Link>

        <Link href={pkg.npm_url} target="_blank">
          <Badge
            variant="outline"
            className="bg-[#BC3433] text-[#151030] font-bold text-sm border-[#151030]"
          >
            npm
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default BackPackageCard;
