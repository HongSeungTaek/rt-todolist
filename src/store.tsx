import { observable } from 'mobx';

interface PersonInfo {
    age: number,
    increase: () => void;
}

const Store = observable<PersonInfo>({
    age: 35,
    increase() {
        this.age++;
    }
})

export default Store;