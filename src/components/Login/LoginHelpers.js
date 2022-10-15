const validations = (name, value) => {
    const validationVocabulary = {
        email: () => Boolean(value && typeof value === 'string' && value.includes('@')),
        password: () => Boolean(value && typeof value === 'string' && value.length > 6),
        default: () => true
    }
    return validationVocabulary[name] ? validationVocabulary[name]() : validationVocabulary.default();
}

export const setFormState = () => ({
    email: {
        value: '',
        valid: null
    },
    password: {
        value: '',
        valid: null
    },
    wholeForm: {
        valid: false
    }
})

export const formReducer = (state, {value, name, type}) => {
    const typesVocabulary = {
        change: () => ({
            ...state,
            [name]: {
                value,
                valid: state[name].valid
            }
        }),
        blur: () => {
            const {wholeForm, ...rest} = state;
            const isWholeFormValid = Object.values(rest).every(({value}) => value);
            return {
                ...state,
                [name]: {
                    value,
                    valid: validations(name, value)
                },
                wholeForm: {
                    valid: isWholeFormValid
                }
            }
        },
        default: () => ({...state})
    }
    return typesVocabulary[type] ? typesVocabulary[type]() : typesVocabulary.default();
}