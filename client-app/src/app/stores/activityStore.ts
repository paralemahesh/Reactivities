import { observable} from 'mobx';
import { createContext } from 'react';

class ActivityStore {
    @observable Title = "hello"
}

export default createContext(new ActivityStore());