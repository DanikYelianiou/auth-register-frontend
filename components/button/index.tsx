import { DetailedHTMLProps, ImgHTMLAttributes, ReactElement } from "react";
import styles from "./button.module.scss";
import { SvgIconProps } from '@material-ui/core';

interface IButton {
    text: string
    state: boolean
    handler: () => void
    priceBtn: boolean
    size: string
    colorPalette?: boolean
    icon?: string
    iconSrc?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | SvgIconProps | JSX.IntrinsicElements
    price?: number
    textColor?: string
    backgroundColor?: string
    fontWeight?: number
    textTransform?: string
}

const Button = ({
    text,
    state,
    colorPalette,
    handler,
    size, // fill | fixed 
    icon, // before text | after text | both
    iconSrc,
    priceBtn,
    price,
    textColor,
    backgroundColor,
    fontWeight,
    textTransform, // none | capitalize | uppercase | lowercase | full-width | full-size-kana
}: IButton): ReactElement => {

    return (
        <>
            {
                !priceBtn && size === 'fixed' && (
                    <button 
                        onClick={() => handler()} 
                        disabled={state}
                        className={
                            (!colorPalette && !state) ? styles.button_common :
                            (!colorPalette && state) ? styles.button_common_disabled :
                            (colorPalette && !state) ? styles.button_pink : 
                            (colorPalette && state) && styles.button_pink_disabled

                        }
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {icon == "before text" &&
                            <>
                                {iconSrc}
                                {text}
                            </>
                        }
                        {icon === "after text" &&
                            <>
                                {text}
                                {iconSrc}
                            </>
                        }
                        {icon == "both" &&
                            <>
                                {iconSrc}
                                {text}
                                {iconSrc}
                            </>
                        }
                    </button>
                )
            }
            {
                priceBtn && size === 'fixed' && (
                    <button 
                        onClick={() => handler()} 
                        disabled={state}
                        className={styles.button_price}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {icon == "before text" &&
                            <>
                                {iconSrc}
                                {text} <span className={styles.priceText}>{price}</span>
                            </>
                        }
                        {icon === "after text" &&
                            <>
                                {text} <span className={styles.priceText}>{price}</span>
                                {iconSrc}
                            </>
                        }
                        {icon == "both" &&
                            <>
                                {iconSrc}
                                {text} <span className={styles.priceText}>{price}</span>
                                {iconSrc}
                            </>
                        }
                    </button>
                )
            }
            {
                size === 'fill' && (
                    <button 
                        onClick={() => handler()} 
                        className={styles.fill_btn}
                        style={{
                            color: textColor, 
                            backgroundColor: backgroundColor, 
                            fontWeight: fontWeight,
                            textTransform: textTransform,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {icon == "before text" &&
                            <>
                                {iconSrc}
                                {text}
                            </>
                        }
                        {icon === "after text" &&
                            <>
                                {text}
                                {iconSrc}
                            </>
                        }
                        {icon == "both" &&
                            <>
                                {iconSrc}
                                {text}
                                {iconSrc}
                            </>
                        }
                    </button>
                )
            }
        </>
    )
}
export default Button