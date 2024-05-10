import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instances = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';

    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): nunber {
    return Mage._instances;
  }
}
