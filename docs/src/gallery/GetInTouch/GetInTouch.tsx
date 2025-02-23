import React from 'react';
import cx from 'clsx';
import { Sun, Phone, MapPin, AtSign } from 'react-feather';
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  useMantineTheme,
  createStyles,
} from '@mantine/core';
import bg from './bg.svg';

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderRadius: theme.radius.lg,
    padding: 4,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,

    [BREAKPOINT]: {
      flexDirection: 'column',
    },
  },

  form: {
    boxSizing: 'border-box',
    flex: 1,
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,
    borderLeft: 0,

    [BREAKPOINT]: {
      padding: theme.spacing.md,
      paddingLeft: theme.spacing.md,
    },
  },

  fields: {
    marginTop: -12,
  },

  fieldInput: {
    flex: 1,

    '& + &': {
      marginLeft: theme.spacing.md,

      [BREAKPOINT]: {
        marginLeft: 0,
        marginTop: theme.spacing.md,
      },
    },
  },

  fieldsGroup: {
    display: 'flex',

    [BREAKPOINT]: {
      flexDirection: 'column',
    },
  },

  field: {
    '& + &': {
      marginTop: theme.spacing.sm,
    },
  },

  contacts: {
    boxSizing: 'border-box',
    position: 'relative',
    borderRadius: theme.radius.lg - 2,
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '1px solid transparent',
    padding: theme.spacing.xl,
    flex: '0 0 280px',

    '& *': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.white,
    },

    [BREAKPOINT]: {
      marginBottom: theme.spacing.sm,
      paddingLeft: theme.spacing.md,
    },
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,

    [BREAKPOINT]: {
      marginBottom: theme.spacing.xl,
    },
  },

  control: {
    [BREAKPOINT]: {
      flex: 1,
    },
  },
}));

function Contact({
  className,
  title,
  description,
  icon: Icon,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.FC<React.ComponentProps<typeof Sun>>;
}) {
  const theme = useMantineTheme();
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }} className={className}>
      <Icon size={22} style={{ marginRight: theme.spacing.md }} />
      <div>
        <Text
          size="xs"
          style={{
            color: theme.colors.blue[0],
          }}
        >
          {title}
        </Text>
        <Text weight={500}>{description}</Text>
      </div>
    </div>
  );
}

export function GetInTouch() {
  const classes = useStyles();

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text size="lg" weight={700} className={classes.title}>
            Contact information
          </Text>

          <Group direction="column" spacing="xl">
            <Contact title="Email" description="hello@mantine.dev" icon={AtSign} />
            <Contact title="Phone" description="+49 (800) 335 35 35" icon={Phone} />
            <Contact title="Address" description="844 Morris Park avenue" icon={MapPin} />
            <Contact title="Working hours" description="8 a.m. – 11 p.m." icon={Sun} />
          </Group>
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text size="lg" weight={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <div className={cx(classes.field, classes.fieldsGroup)}>
              <TextInput className={classes.fieldInput} label="Your name" placeholder="Your name" />
              <TextInput
                className={classes.fieldInput}
                label="Your email"
                placeholder="hello@mantine.dev"
                required
              />
            </div>

            <TextInput className={classes.field} label="Subject" placeholder="Subject" required />

            <Textarea
              className={classes.field}
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group position="right" className={classes.field}>
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
