import React, { useEffect, useState } from 'react';
import { fetchNews } from '../client/fetchNews';
import { ArticleProps } from '../types/ArticleProps';
import { Grid, Typography } from '@mui/material';
import { NewsCard } from '../components';

export function Home(): React.ReactElement {
    const [news, setNews] = useState<ArticleProps[]>([]);

    useEffect(() => {
        fetchNews
            .then((response) => {
                console.log(response);
                if (response.data) {
                    const articles: ArticleProps[] = response.data.articles;
                    setNews(articles);
                    return;
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Grid container>
            {news ? (
                news.map((article: ArticleProps) => {
                    return (
                        <Grid
                            item
                            md={3}
                            style={{ margin: '1vh', maxWidth: '445px' }}
                            key={`${article.description}`}
                        >
                            <NewsCard {...article} />
                        </Grid>
                    );
                })
            ) : (
                <>
                    <Grid item md={5} />
                    <Grid item md={5} padding={5}>
                        <Typography variant="h2">Error fetching the news!</Typography>
                    </Grid>
                </>
            )}
        </Grid>
    );
}
