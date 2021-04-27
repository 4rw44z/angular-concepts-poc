let uuid = 0;
import * as faker from 'faker';
export class Profiles {
    id?: string;
    name: string;
    image: string;
    timestamp: Date;
    gender: string;
    about: string;
    constructor(profile: IProfile) {
        this.id = profile.id || `profile ${++uuid}`;
        this.name = profile.name;
        this.image = profile.image;
        this.timestamp = profile.timestamp;
        this.gender = profile.gender;
        this.about = profile.about;
    }

    static get new() {
        const name = faker.name.findName();
        const timestamp = faker.date.between('2021-01-01', new Date());
        let gender;
        let image;
        if(uuid % 2 === 0) {
            gender = 'male';
            image = 'https://avatarfiles.alphacoders.com/117/117578.jpg';
        }
        else {
            gender = 'female';
            image = 'https://avatarfiles.alphacoders.com/840/84098.jpg';
        }
        const about = faker.lorem.sentence();
        return new Profiles ({
            name: name,
            timestamp: timestamp,
            image: image,
            gender: gender,
            about: about
        })
    }
}

export interface IProfile {
    id?: string;
    name: string;
    image: string;
    timestamp: Date;
    gender: string;
    about: string;
}