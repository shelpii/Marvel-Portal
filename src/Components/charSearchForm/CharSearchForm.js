import { useState } from "react";
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage,} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./CharSearchForm.scss";

const CharSearchForm = () => {
    const [char, setChar] = useState(null);
    const { loading, error, getCharacterName, clearError } = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    };

    const updateChar = (name) => {
        clearError();

        getCharacterName(name).then(onCharLoaded);
    };

    const errorMessage = error ? 
        <div className="char__search-critical-error">
            <ErrorMessage />
        </div>
     : null;
    const result = !char ? null : char.length > 0 ? 
        <div className="char__search-result">
            <div className="char__search-success">{`There is! Visit ${char[0].name} page?`}</div>
            <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                <div className="inner">To page</div>
            </Link>
        </div>
     : 
        <div className="char__search-error">
            The character was not found. Check the name and try again
        </div>
    ;

    return (
        <div className="char__search-form">
            <Formik
                initialValues={{
                    charName: "",
                }}
                validationSchema={Yup.object({
                    charName: Yup.string()
                        .min(2, "Enter at least 2 characters!")
                        .required("This field is required"),
                })}
                onSubmit={({ charName }) => {
                    updateChar(charName);
                }}
            >
                <Form>
                    <label className="char__search-label">Or find a character by name:</label>
                    <div className="char__search-body">
                        <Field
                            id="charName"
                            name="charName"
                            type="text"
                            placeholder="Enter name"
                        />
                        <button
                            type="submit"
                            className="button button__main"
                            disabled={loading}
                        >
                        <div className="inner">find</div></button>
                    </div>
                    <FormikErrorMessage
                        className="char__search-error"
                        component="div"
                        name="charName"
                    />
                </Form>
            </Formik>
            {result}
            {errorMessage}
        </div>
    );
};

export default CharSearchForm;
