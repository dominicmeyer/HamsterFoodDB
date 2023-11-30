export class FoodEntry {
	readonly id: number
	readonly name: string
	readonly comment: string
	readonly digestible: boolean

	constructor(id: number, name: string, comment: string, digestible: boolean) {
		this.id = id
		this.name = name
		this.comment = comment
		this.digestible = digestible
	}
}
