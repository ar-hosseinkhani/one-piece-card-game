class StageCard extends PrimaryDeckCard{

    constructor(name: string, ability: Abilities[], cost: number){
        super();
        this.setName(name);
        this.setAbility(ability);
        this.setCost(cost);
    }
}