class LeaderCard extends PrimaryDeckCard{

    constructor(name: string, life: number, ability: Abilities[], power: number, color: string){
        super();
        this.setName(name);
        this.setLife(life);
        this.setAbility(ability);
        this.setPower(power);
        this.setColor(color);
    }
}