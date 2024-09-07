import { PC } from '@/shared/types/page';
import s from './index.module.css';
import { SduiWidget } from '@/shared/ui/sdui-widget';
import { SDUIWidget } from 'tutor-online-global-shared';
import { useLocation } from 'react-router-dom';

const data: SDUIWidget = {
    elements: [
        {
            type: 'text',
            data: {
                value: 'Заголовок 1',
                type: 'title',
                size: 'xl',
            },
        },
        {
            type: 'text',
            data: {
                value: `Lorem <b>ipsum</b> dolor <i>sit</i> <color>amet</color> <u>consectetur</u> <marky>adipisicing</marky> <markg>elit</markg>. <markb>Atque</markb> <del>officia</del> <sub>ducimus</sub> corrupti <sup>molestias</sup> vel inventore debitis et dolorum quia eligendi <colory>provident</colory> quas <colorb>natus</colorb> magnam <colorg>neque</colorg> incidunt, magni nisi <u>blanditiis</u> veritatis. <math><msqrt><mn>2</mn></msqrt></math> <mrow>
            <math>
              <mrow>
                <mrow>
                  <mi>a</mi>
                  <mo></mo>
                  <msup>
                    <mi>x</mi>
                    <mn>2</mn>
                  </msup>
                </mrow>
                <mo>+ </mo>
                <mi>b</mi>
                <mo></mo>
                <mi>x</mi>
              </mrow>
              <mo>+ </mo>
              <mi>c</mi>
            </mrow>
            <mo>=</mo>
            <mn>0</mn>
          </math>`,
                type: 'text',
                size: 'xl',
            },
        },
        {
            type: 'text',
            data: {
                value: `
                    <math>
                    <mrow>
                        <mrow>
                        <mi>a</mi>
                        <msup>
                            <mi>x</mi>
                            <mn>2</mn>
                        </msup>
                        </mrow>
                        <mo>+</mo>
                        <mi>b</mi>
                        <mi>x</mi>
                    </mrow>
                    <mo>+ </mo>
                    <mi>c</mi>
                    </mrow>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>`,
                type: 'text',
                size: 'xl',
                textAlign: 'center',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Заголовок 2',
                type: 'title',
                size: 'l',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Заголовок 3',
                type: 'title',
                size: 'm',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Заголовок 4',
                type: 'title',
                size: 's',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Заголовок 5',
                type: 'title',
                size: 'xs',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ducimus corrupti molestias vel inventore debitis et dolorum quia eligendi provident quas natus magnam neque incidunt, magni nisi blanditiis veritatis.',
                type: 'text',
                size: 'xl',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ducimus corrupti molestias vel inventore debitis et dolorum quia eligendi provident quas natus magnam neque incidunt, magni nisi blanditiis veritatis.',
                type: 'text',
                size: 'l',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ducimus corrupti molestias vel inventore debitis et dolorum quia eligendi provident quas natus magnam neque incidunt, magni nisi blanditiis veritatis.',
                type: 'text',
                size: 'm',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ducimus corrupti molestias vel inventore debitis et dolorum quia eligendi provident quas natus magnam neque incidunt, magni nisi blanditiis veritatis.',
                type: 'text',
                size: 's',
            },
        },
        {
            type: 'text',
            data: {
                value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia ducimus corrupti molestias vel inventore debitis et dolorum quia eligendi provident quas natus magnam neque incidunt, magni nisi blanditiis veritatis.',
                type: 'text',
                size: 'xs',
            },
        },
        {
            type: 'text',
            data: {
                value: 'positive',
                type: 'text',
                size: 'xl',
                color: 'positive',
            },
        },
        {
            type: 'text',
            data: {
                value: 'attention',
                type: 'text',
                size: 'xl',
                color: 'attention',
            },
        },
        {
            type: 'text',
            data: {
                value: 'negative',
                type: 'text',
                size: 'xl',
                color: 'negative',
            },
        },
        {
            type: 'text',
            data: {
                value: 'link',
                type: 'text',
                size: 'xl',
                color: 'link',
            },
        },
        {
            type: 'text',
            data: {
                value: 'primary',
                type: 'text',
                size: 'xl',
                color: 'primary',
            },
        },
        {
            type: 'text',
            data: {
                value: 'primaryInverted',
                type: 'text',
                size: 'xl',
                color: 'primaryInverted',
            },
        },
        {
            type: 'text',
            data: {
                value: 'secondary',
                type: 'text',
                size: 'xl',
                color: 'secondary',
            },
        },
        {
            type: 'text',
            data: {
                value: 'secondaryInverted',
                type: 'text',
                size: 'xl',
                color: 'secondaryInverted',
            },
        },
        {
            type: 'text',
            data: {
                value: 'tertiary',
                type: 'text',
                size: 'xl',
                color: 'tertiary',
            },
        },
        {
            type: 'text',
            data: {
                value: 'tertiaryInverted',
                type: 'text',
                size: 'xl',
                color: 'tertiaryInverted',
            },
        },
    ],
};

const SDUIPage: PC = ({ useHeaderTitle }) => {
    const location = useLocation();
    useHeaderTitle('Заголовок');

    console.log(location);
    

    return (
        <div className={s.page}>
            <SduiWidget data={data} />
        </div>
    );
};

export default SDUIPage;
