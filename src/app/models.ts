export class Doctor {
    id: number;
    firstname: string;
    lastname: string;
}

export class Registration {
  id: number;
  doctor: Doctor;
  clinic: Clinic;
  date: Date;
}

export class Clinic {
    id: number;
    name: string;
    logo: string;
    point: string;
    address: string;
    latitude: number;
    longitude: number;
    doctors: Array<Doctor>;
}
