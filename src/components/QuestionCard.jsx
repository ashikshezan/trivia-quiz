import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 400,
        margin: "25px 0px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 11,
        color: '#212121',
        width: '100%'
    },
    btn: {
        display: 'block',
        fontSize: 9,
        width: '100%',
        margin: '10px 0px',
        textTransform: 'none',

    }
});


const QuestionCard = ({ question, choices, rightAns }) => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [isAnswered, setIsAnswered] = useState({ disabled: false, color: "primary" })
    useEffect(() => {
        console.log(value)
    }, [value])

    const handleClick = (option) => {
        setValue(option)
        if (option !== rightAns) {
            setIsAnswered({ disabled: false, color: "scondary" })
        }
    }

    return (
        <div s>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {question}
                    </Typography>
                    {choices.map((option, id) => {
                        return (
                            <Button
                                variant="contained"
                                color={isAnswered.color}
                                className={classes.btn}
                                disabled={isAnswered.disabled}
                                onClick={() => handleClick(option)}
                                key={id}
                                value={value}>{option}</Button>
                        )
                    })}
                </CardContent>
            </Card>
        </div>
    )
}

export default QuestionCard

QuestionCard.defaultProps = {
    question: "this is your question",
    choices: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
    ],
    rightAns: "Option 2"

}
