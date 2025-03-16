import { useWindowSize } from '../util/Hooks';
import style from './Resume.module.css';

/**
 * Resume page
 */
export default function Resume() {
    return <div className={style.resumeContainer}>
        <ResumeDocument/>
    </div> 
}

function ResumeDocument() {
    const [ width ] = useWindowSize();
    const resumeWidth = width / 2 < 500 ? width : width / 2;
    const resumeHeight = resumeWidth * 1.3;

    return <embed src="/resume.pdf" width={resumeWidth} height={resumeHeight} 
            type="application/pdf"/>
}