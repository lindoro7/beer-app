import { useState, useEffect } from "react";
import { IEquipment } from "../interfaces";

function Equipment() {
  const [equip, setEquip] = useState<IEquipment[]>([]);

  const fetchEquipment = async () => {
    try {
      const data = await fetch("/api/equipment");
      const equipment = await data.json();
      setEquip(equipment);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <>
      <div>Equipments page</div>
      {equip.length > 0
        ? equip.map((e: IEquipment) => {
            return <p key={e.id}>{e.name}</p>;
          })
        : "No equipment"}
    </>
  );
}

export default Equipment;
