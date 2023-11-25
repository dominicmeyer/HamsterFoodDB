export class FoodEntry {
	readonly id: number
	readonly name: string
	readonly category: string
	readonly comment: string

	constructor(id: number, name: string, category: string, comment: string) {
		this.id = id
		this.name = name
		this.category = category
		this.comment = comment
	}
}
