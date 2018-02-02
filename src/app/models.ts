class Doctor {
    firstname: string;
    secondname: string;
    termin: Date;
}

export class Clinic {
    id: string;
    name: string;
    logo: string;
    adress: string;
    latitude: number;
    longitude: number;
    doctors: Array<Doctor>;
}


