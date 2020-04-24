import { Question } from './question.model';
import { Theme} from './theme.model';

export interface Quiz {
    id?: string;
    name: string;
    theme?: string;
    questions: Question[];
    date?: Date;
}
