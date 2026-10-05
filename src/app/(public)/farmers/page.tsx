import FarmersHero from "@/app/(public)/farmers/_components/FarmersHero";
import FarmerStats from "@/app/(public)/farmers/_components/FarmerStats";
import FarmersPage from "@/app/(public)/farmers/_components/FarmersPage";
import { getAllFarmers } from "@/app/(public)/farmers/_actions/farmerAction";
export default async function Farmers() {
    const response = await getAllFarmers();
    const farmers = response.data;
    const totalFarms = farmers.reduce(
        (total, farmer) => total + farmer.farms.length,
        0
    );
    const totalLand = farmers.reduce(
        (total, farmer) =>
            total +
            farmer.farms.reduce(
                (farmTotal, farm) => farmTotal + farm.landSize,
                0
            ),
        0
    );
    return (
        <main>
            <FarmersHero />
            <FarmerStats
                totalFarmers={farmers.length}
                totalFarms={totalFarms}
                totalLand={totalLand}
            />
            <FarmersPage farmers={farmers} />
        </main>
    );
}