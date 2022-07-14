import { FC, useEffect } from 'react';
import { fetchData } from 'src/store/articles/slice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'src/store';

export const Articles: FC = () => {
    const dispatch = useDispatch() as any;
    const articles = useSelector((store: StoreState) => store.articles.articles);
    const loadign = useSelector((store: StoreState) => store.articles.loading);
    const error = useSelector((store: StoreState) => store.articles.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>
            <h2>Articles</h2>
            {loadign && <p>Loading...</p>}
            <button onClick={() => dispatch(fetchData())}>get data</button>
            {!loadign && (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>{article.title}</li>
                    ))}
                </ul>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
};