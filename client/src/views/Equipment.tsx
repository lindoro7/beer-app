import { useState, useEffect } from "react";
import { IEquipmentType } from "../interfaces";

function Equipment() {
  const [equip, setEquip] = useState<IEquipmentType[]>([]);

  const fetchEquipment = async () => {
    try {
      const data = await fetch("/api/equipment-type");
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
    <div className='px-5 md:w-[800px] md:mx-auto'>
      <div>Equipments page</div>
      {equip.length > 0
        ? equip.map((e: IEquipmentType) => {
            return <p key={e.id}>{e.name}</p>;
          })
        : "No equipment"}
    </div>
  );
}

export default Equipment;
