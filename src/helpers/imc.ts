export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
    msg: string;
}

export const levels: Level[] = [
    {title: 'Magreza', color: '#96A3AB',icon: 'down', imc: [0, 18.59], msg: 'Seu IMC está abaixo do recomendado. É importante cuidar da saúde com uma alimentação equilibrada e nutritiva. Considere procurar um profissional de saúde, como um nutricionista, para obter orientações personalizadas. Pequenas mudanças podem fazer uma grande diferença!'},
    {title: 'Normal', color: '#0EAD69',icon: 'up', imc: [18.6, 24.99], msg: 'Parabéns! Seu IMC está dentro da faixa recomendada, o que é um ótimo indicativo para sua saúde. Mantenha seu estilo de vida equilibrado com uma boa alimentação e atividades físicas regulares. Continue cuidando bem de você!'},
    {title: 'Sobrepeso', color: '#E2B039',icon: 'down', imc: [25, 29.99], msg: 'Seu IMC indica sobrepeso. Manter um estilo de vida saudável é essencial para o bem-estar, e pequenos ajustes na alimentação e na rotina de atividades podem trazer grandes benefícios. Considere conversar com um profissional de saúde para receber orientações personalizadas e alcançar seus objetivos de forma saudável. Você está no caminho certo, e cada passo importa!'},
    {title: 'Obesidade', color: '#C3423F',icon: 'down', imc: [30, 99], msg: 'Seu IMC indica obesidade. É importante cuidar bem da sua saúde, e pequenas mudanças no dia a dia podem fazer uma grande diferença a longo prazo. Considere buscar o suporte de um profissional de saúde, como um nutricionista ou um médico, que pode ajudar você a traçar um caminho personalizado e saudável para alcançar seus objetivos. Lembre-se: cada passo é válido, e você merece esse cuidado!'},
    
]

export const calculateIMC = (height: number, weight: number) => {
    const calc =(weight / (height * height));
    const imc = parseFloat(calc.toFixed(2))

    for (let i in levels) {
        if (imc>= levels[i].imc[0] &&imc<= levels[i].imc[1]) {
            let levelCopy = {...levels[i]};

            levelCopy.yourImc = imc;
            return levelCopy;
        }
    }

    return null;
}