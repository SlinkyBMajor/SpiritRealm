import { useCallback, useEffect, useState } from "react";

export enum Team {
  neutral = "NEUTRAL", // Non attackable
  enemy = "ENEMY", // Enemies
  ally = "ALLY", // Player + Allies of player
}

// Properties start with underscore to differentiate between them and the "methods" (takeDamage etc)
export interface ActorProperties {
  _maxHP: number;
  _currentHP: number;
  _mana: ManaPools;
  _team: Team;
}

interface ManaPools {
  white: ManaProperty;
  lightning: ManaProperty;
  chaos: ManaProperty;
}

export type ManaProperty = {
  max: number;
  current: number;
};

export type ManaType = "white" | "lightning" | "chaos";

export interface Actor extends ActorProperties {
  isDead: () => boolean;
  takeDamage: (value: number) => void;
  spendMana: (value: number, type: ManaType) => void;
}

export function useActor(actorProperties: ActorProperties): Actor {
  const [properties, setProperties] =
    useState<ActorProperties>(actorProperties);

  console.log({ properties });

  useEffect(() => {
    if (properties._currentHP < 1) {
      window.alert("You dead");
    }
  }, [properties._currentHP]);

  const isDead = useCallback(() => {
    return properties._currentHP < 1;
  }, [properties._currentHP]);

  const takeDamage = (value: number) => {
    if (typeof value !== "number") {
      throw new Error("takeDamage got non number value");
    }
    console.log("Actor took damage", value);
    setProperties((prev) => ({ ...prev, _currentHP: prev._currentHP - value }));
  };

  const spendMana = (value: number, type: ManaType) => {
    if (typeof value !== "number") {
      throw new Error("takeDamage got non number value");
    }

    console.log("Actor spent mana", ":", value, type);

    const newManaObject = {
      ...properties._mana[type],
      current: properties._mana[type].current - value,
    };

    setProperties((prev) => ({
      ...prev,
      _mana: {
        ...prev._mana,
        [type]: newManaObject,
      },
    }));
  };

  return { ...properties, takeDamage, spendMana, isDead };
}
