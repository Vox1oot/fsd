import { useParams } from 'react-router';

export const CoursePage = () => {
    const { alias } = useParams<{ alias: string }>();

    return (
        <div>
            <h1>Страница курса</h1>
            <p>Алиас курса: {alias}</p>
        </div>
    );
};
