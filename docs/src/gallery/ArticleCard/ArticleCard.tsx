import React from 'react';
import cx from 'clsx';
import { BookmarkIcon, HeartIcon, ShareIcon } from '@primer/octicons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
  },

  footer: {
    marginTop: theme.spacing.xs,
  },
}));

interface ArticleCardProps {
  image: string;
  link: string;
  title: string;
  description: string;
  rating: string;
  author: {
    name: string;
    image: string;
  };
}

export function ArticleCard({
  className,
  image,
  link,
  title,
  description,
  author,
  rating,
  ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const classes = useStyles();
  const theme = useMantineTheme();

  return (
    <Card shadow="sm" className={cx(classes.card, className)} {...others}>
      <Card.Section>
        <a href={link} target="_blank" rel="noreferrer">
          <Image src={image} height={180} />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
      >
        {rating}
      </Badge>

      <Text className={classes.title} weight={500} component="a" href={link} target="_blank">
        {title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group position="apart" className={classes.footer}>
        <Center>
          <Avatar src={author.image} size={24} radius="xl" style={{ marginRight: 8 }} />
          <Text size="sm" inline>
            {author.name}
          </Text>
        </Center>

        <Group spacing={8} style={{ marginRight: 0 }}>
          <ActionIcon className={classes.action} style={{ color: theme.colors.red[6] }}>
            <HeartIcon />
          </ActionIcon>
          <ActionIcon className={classes.action} style={{ color: theme.colors.yellow[7] }}>
            <BookmarkIcon />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <ShareIcon />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
