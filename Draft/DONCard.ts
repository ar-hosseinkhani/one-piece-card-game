class DONCard extends Card{

    constructor(value:number){
        super();
        this.setValue(value);
    }

    private _value: number;

    public getValue(): number {
        return this._value;
    }
    public setValue(value: number) {
        this._value = value;
    }

}