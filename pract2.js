export class Questions {
    constructor(questions, answer, correct) {
        this.questions = questions;
        this.answer = answer; 
        this.correct = correct;
    }
}

export let arrayQuiz = [
    {
        question: 'Кто стал чемпионом Формулы 1 в сезоне 2021 года?',
        answerText: ["Макс Ферстаппен", "Себастьян Феттель", "Шарль Леклер", "Льюис Хэмилтон"],
        correct: 0,
    },
    {
        question: 'Какая команда использует двигатель от Mercedes?',
        answerText: ["Red Bull Racing", "McLaren", "Alpine", "Ferrari"],
        correct: 1,
    },    
    {
        question: 'Сколько гонок обычно проводится в сезоне Формулы 1? (с 2024 г.)',
        answerText: ["22", "24", "18", "15"],
        correct: 1,
    },
    {
        question: 'Как называется квалификационный формат, используемый в большинстве гонок?',
        answerText: ["Спринт", "Тайм-атака", "Q1-Q2-Q3", "Гонка на выбывание"],
        correct: 2,
    },
    {
        question: 'Какая трасса считается самой длинной в календаре Формулы 1?',
        answerText: ["Спа-Франкоршам", "Сильверстоун", "Монца", "Сингапур"],
        correct: 0,
    },
    {
        question: 'Кто является основателем команды Ferrari?',
        answerText: ["Жан Тодт", "Энцо Феррари", "Серхио Маркионне", "Лука ди Монтедземоло"],
        correct: 1,
    },
    {
        question: 'Что означает флаг с черно-белой клеткой?',
        answerText: ["Нарушение правил", "Пит-стоп", "Финиш гонки", "Предупреждение"],
        correct: 2,
    },
    {
        question: 'Какая команда доминировала в Формуле 1 в начале 2010-х?',
        answerText: ["Ferrari", "Mercedes", "Red Bull Racing", "Renault"],
        correct: 2,
    },
    {
        question: 'Какой гонщик имеет наибольшее количество побед в истории Формулы 1? (2025 г.)',
        answerText: ["Айртон Сенна", "Льюис Хэмилтон", "Михаэль Шумахер", "Ален Прост"],
        correct: 1,
    },
    {
        question: 'Что такое DRS в Формуле 1?',
        answerText: ["Система снижения сопротивления", "Система безопасности", "Система торможения", "Система охлаждения"],
        correct: 0,
    }
]
