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
	
	// TODO: #7 create isSpaceDebris check
	// isSpaceDebris(): boolean {
	// 	return this.type === 'Space Debris';
   // }
	// isSpaceDebris(): {}

}
