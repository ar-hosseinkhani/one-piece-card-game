class CharacterCard extends PrimaryDeckCard{

    constructor(name: string, ability: Abilities[], power: number, color: string, cost: number){
        super();
        this.setName(name);
        this.setAbility(ability);
        this.setPower(power);
        this.setColor(color);
        this.setCost(cost);
    }
}