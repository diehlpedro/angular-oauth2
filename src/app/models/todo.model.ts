
export class Todo {
  constructor(
    public id: number,
    public title: string,
    public done: boolean = false,
    public description: string | null = null,
    public depends_on: number | null = null,
    public section_id: number | null = null,
    public created_at: string | null = null,
    public deadline: string | null = null,
    public closed_at: string | null = null
  ) {}
}
