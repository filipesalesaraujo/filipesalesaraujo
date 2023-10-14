import React, {useState, ChangeEvent, useEffect} from 'react';

type Category =
    | 'Abaixo do Peso'
    | 'Peso Normal'
    | 'Sobrepeso'
    | 'Obesidade Grau 1'
    | 'Obesidade Grau 2'
    | 'Obesidade Grau 3';

function getBackgroundColorClass(category: Category | null): string {
    switch (category) {
        case 'Abaixo do Peso':
            return 'bg-yellow-500'; // Amarelo para Abaixo do Peso
        case 'Peso Normal':
            return 'bg-green-500'; // Verde para Peso Normal
        case 'Sobrepeso':
            return 'bg-red-500'; // Vermelho para Sobrepeso
        case 'Obesidade Grau 1':
            return 'bg-red-600'; // Vermelho mais escuro para Obesidade Grau 1
        case 'Obesidade Grau 2':
            return 'bg-red-700'; // Vermelho ainda mais escuro para Obesidade Grau 2
        case 'Obesidade Grau 3':
            return 'bg-red-800'; // Vermelho mais escuro para Obesidade Grau 3
        default:
            return ''; // Use uma classe vazia para outras categorias
    }
}

export default function CalculadoraIMC(): JSX.Element {
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [category, setCategory] = useState<Category | null>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        setIsButtonDisabled(weight === '' || height === '');
    }, [weight, height]);

    const validateNumberInput = (value: string): boolean => {
        // Verificar se o valor é um número válido
        if (/^[0-9]+$/.test(value) || value === '') {
            return true;
        }
        return false;
    };

    const handleWeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        // Verificar se o valor inserido é válido
        if (validateNumberInput(inputValue)) {
            setWeight(inputValue);
        }
    };

    const handleHeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;

        // Verificar se o valor inserido é válido
        if (validateNumberInput(inputValue)) {
            setHeight(inputValue);
        }
    };

    const calculateIMC = (): void => {
        const weightInKg: number = parseFloat(weight);
        const heightInMeters: number = parseFloat(height) / 100;
        const imc: number = weightInKg / (heightInMeters * heightInMeters);

        setResult(imc.toFixed(2));

        if (imc < 18.5) {
            setCategory('Abaixo do Peso');
        } else if (imc >= 18.5 && imc < 24.9) {
            setCategory('Peso Normal');
        } else if (imc >= 25 && imc < 29.9) {
            setCategory('Sobrepeso');
        } else if (imc >= 30 && imc < 34.9) {
            setCategory('Obesidade Grau 1');
        } else if (imc >= 35 && imc < 39.9) {
            setCategory('Obesidade Grau 2');
        } else {
            setCategory('Obesidade Grau 3');
        }
    };

    return (
        <main className="flex items-center min-h-screen flex-col bg-about bg-cover bg-no-repeat bg-[center_-30px]">
            <section className="max-w-7xl px-5 py-10 flex flex-wrap gap-10 flex-col ">

                <h1 className="text-3xl font-bold">Calculadora de Índice de Massa Corporal (IMC)</h1>
                <p className="text-lg">A calculadora de Índice de Massa Corporal (IMC) é uma ferramenta simples, mas poderosa, que ajuda você a avaliar sua saúde com base no seu peso e altura. O IMC é uma medida amplamente reconhecida que ajuda a determinar se você está dentro de uma faixa de peso saudável.</p>

                <h2 className="text-3xl font-bold">O que é o IMC?</h2>
                <p className="text-lg">O IMC é um número calculado dividindo seu peso (em quilogramas) pela sua altura (em metros) ao quadrado. Essa fórmula fornece uma estimativa da quantidade de gordura corporal em relação à sua altura.</p>

                <h3 className="text-3xl font-bold">Por que o IMC é importante?</h3>
                <p className="text-lg">O IMC é usado para avaliar se você está abaixo do peso, no peso ideal, com sobrepeso ou obeso. Essa informação pode ajudar na prevenção de problemas de saúde relacionados ao peso, como diabetes, doenças cardíacas e hipertensão.</p>

                <h4 className="text-3xl font-bold">Como usar a Calculadora de IMC</h4>

                <ul className="text-lg list-decimal pl-5">
                    <li>Insira seu peso atual em quilogramas no campo &quot;Peso (em kg)&quot;.</li>
                    <li>Insira sua altura atual em centímetros no campo &quot;Altura (em cm)&quot;.</li>
                    <li>Clique no botão &quot;Calcular IMC&quot;.</li>
                </ul>

                <p className="text-lg">A calculadora apresentará seu IMC com duas casas decimais. Além disso, classificará seu IMC em uma das seguintes categorias:</p>

                <ul className="text-lg list-disc pl-5">
                    <li><strong>Abaixo do Peso:</strong> IMC menor que 18,5</li>
                    <li><strong>Peso Normal:</strong> IMC entre 18,5 e 24,9</li>
                    <li><strong>Sobrepeso:</strong> IMC entre 25 e 29,9</li>
                    <li><strong>Obesidade Grau 1:</strong> IMC entre 30 e 34,9</li>
                    <li><strong>Obesidade Grau 2:</strong> IMC entre 35 e 39,9</li>
                    <li><strong>Obesidade Grau 3 (Mórbida):</strong> IMC igual ou superior a 40</li>
                </ul>

                <p className="text-lg">O IMC é uma ferramenta valiosa para avaliar sua saúde, mas lembre-se de que ele é apenas uma parte do quadro completo. Consultar um profissional de saúde é sempre uma boa ideia para obter orientação personalizada sobre sua saúde e estilo de vida.</p>
                <p className="text-lg">Comece a usar a calculadora agora e saiba mais sobre sua saúde com base no seu IMC!</p>

                <div>
                    <div className="mb-4">
                        <label className="text-lg">Peso (em kg)</label>
                        <input type="text" className="text-lg w-full p-2 border border-gray-300 rounded" value={weight} onChange={handleWeightChange} />
                    </div>
                    <div className="mb-4">
                        <label className="text-lg">Altura (em cm)</label>
                        <input type="text" className="text-lg w-full p-2 border border-gray-300 rounded" value={height} onChange={handleHeightChange} />
                    </div>
                    <button className={`w-full bg-blue-500 text-white py-2 rounded hover:opacity-80 transition-opacity ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={calculateIMC} disabled={isButtonDisabled}>Calcular IMC</button>
                    {result !== '' && category !== null && (
                        <div className={`mt-4 ${getBackgroundColorClass(category)} text-white rounded-lg p-4`}>
                            <p className="text-white">Seu IMC é:</p>
                            <p className="text-2xl font-semibold text-white">{result}</p>
                            <p className="mt-2 text-white">Categoria: {category}</p>
                        </div>
                    )}
                </div>

            </section>


        </main>
    );
}
