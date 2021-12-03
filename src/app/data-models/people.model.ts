export interface People {
  id: string;
  first_name?: string;
  last_name?: string;
  birthdate?: Date;
  birthplace?: string;
  physical_description?: string;
  missing_since?: Date;
  found_since?: Date;
}
