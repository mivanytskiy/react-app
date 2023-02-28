import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from "../../assets/images/logo.jpg";

export const SignIn: React.FC = () => {
    const [emailValue, setEmailValue] = React.useState<string>('');
    const [passwordValue, setPasswordValue] = React.useState<string>('');
    const [isDisabled, setIsDisabled] = React.useState(true);

    const handleChangeEmailValue = React.useCallback((e: any) => {
        setEmailValue(e.target.value);
    }, []);

    const handleChangePasswordValue = React.useCallback((e: any) => {
        setPasswordValue(e.target.value);
    }, []);

    const handleValidEmail = React.useCallback((emailValue: any) => {
        return /\S+@\S+\.\S+/.test(emailValue);
    }, []);

    const handleClick = React.useCallback(() => {
        console.log(emailValue);
        console.log(passwordValue);
    }, [emailValue, passwordValue]);

    React.useEffect(() => {
        setIsDisabled(!handleValidEmail(emailValue));
    }, [emailValue, handleValidEmail]);

    return (
        <div className="rectangle">
            <div className="head">
                <div className="image">
                    <img src={LogoImage} alt=""/>
                </div>
                <div className="title">Sign in</div>
            </div>
            <div className="body">
                <div className="form">
                    <div className="form-input">
                        <input type="email" value={emailValue} onChange={handleChangeEmailValue} placeholder="Email" /> 
                    </div>
                    <div className="form-input">
                        <input type="password" value={passwordValue} onChange={handleChangePasswordValue} placeholder="Password" /> 
                    </div>
                </div>
                <div className="body-footer">
                    <div className="body-footer-create">No account?
                        <Link to="/sign_up" relative="path" className="body-footer-create-button">
                            Create one!
                        </Link>
                    </div> 
                    <div className="body-footer-forgot">
                        <Link to="/sign_up" relative="path" className="body-footer-create-button">
                            Forgot password?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className="button" onClick={handleClick} disabled={isDisabled}>
                    Sign in
                </button>
            </div>
        </div>
    );
}
