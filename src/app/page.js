import Banner from "@/components/Banner";
import Contact from "@/components/contact";
import Fruit from "@/components/fruit";
import MilkAndDrink from "@/components/milkanddrink";
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
