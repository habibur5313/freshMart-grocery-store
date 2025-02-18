import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Fruit from "@/components/Fruit";
import MilkAndDrink from "@/components/MilkAndDrink";
import VegetableAndSalad from "@/components/vegetableAndSalad";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <VegetableAndSalad></VegetableAndSalad>
      <Fruit></Fruit>
      <MilkAndDrink></MilkAndDrink>
      <Contact></Contact>
    </div>
  );
}
