export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	// TODO 3a: fix isSpaceDebris check - Repair the isSpaceDebris method in the Satellite class. isSpaceDebris returns true if the satellite type is 'Space Debris', and it returns false otherwise.
	isSpaceDebris(): boolean {
		//return true;
		return this.type === "Space Debris";
   }

}


