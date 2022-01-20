

export class Distance {
    modifier= 0.3048;
   
    constructor (
        public startValue: number,
        public convertValue: number,
        public unit: string
    ) {}

    public Convert() {
        this.convertValue = this.startValue * this.modifier;
    }

    
}
