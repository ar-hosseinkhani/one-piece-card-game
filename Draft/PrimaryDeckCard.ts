enum TypeofCard{
 Leader,
 Character,
 Event,
 Stage       
}

enum Abilities{
    Trigger,
    Blocker,
    WhenAttacking,
    WhenBlocking,
    DONX,
    DONMinus,
    Main,
    Counter,
    OnPlay,
    DoubleAttack,
    Banish
}

abstract class PrimaryDeckCard extends Card{
    
    private _cost: number;
    private _ability: Abilities[];
    private _color: string;
    private _life: number;
    private _power: number;
    private _name: string;
    private _type: TypeofCard;


    public getType(): TypeofCard {
        return this._type;
    }
    public setType(value: TypeofCard) {
        this._type = value;
    }

    public getAbility(): Abilities[] {
        return this._ability;
    }
    public setAbility(value: Abilities[]) {
        this._ability = value;
    }

    public addAbility(value: Abilities){
        this._ability.push(value)
    }

    public getCost(): number {
        return this._cost;
    }

    public setCost(value: number) {
        this._cost = value;
    }
    
    public getColor(): string {
        return this._color;
    }

    public setColor(value: string) {
        this._color = value;
    }
    
    public getLife(): number {
        return this._life;
    }

    public setLife(value: number) {
        this._life = value;
    }
    
    public getPower(): number {
        return this._power;
    }

    public setPower(value: number) {
        this._power = value;
    }
    
    public getName(): string {
        return this._name;
    }

    public setName(value: string) {
        this._name = value;
    }
}