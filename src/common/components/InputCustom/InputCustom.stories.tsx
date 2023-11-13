import type { Meta, StoryObj } from "@storybook/react"
import { InputCustom, ButtonCustom } from "common/components"
import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import Input from "@mui/joy/Input"

type PropsType = {
    /**
     * Optional click handler
     */
    callBack: (valueTitle: string) => void
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof InputCustom> = {
    title: "TODOLISTS/InputCustom",
    component: InputCustom,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        callBack: {
            description: "ButtonCustom clicked inside form",
            action: "ButtonCustom clicked inside form",
        },
    },
}

export default meta
type Story = StoryObj<typeof InputCustom>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const InputLineWithoutError: Story = {}

export const InputLineWithError = (args: PropsType) => {
    let [title, setTitle] = useState<string>("")
    let [error, setError] = useState<null | string>("Title is required")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(event.currentTarget.value)
    }

    const onKeydownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTaskHandler()
        }
    }
    const addTaskHandler = () => {
        if (title.trim()) {
            args.callBack(title.trim())
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    return (
        <div>
            <Input
                onChange={onChangeInputHandler}
                onKeyDown={onKeydownHandler}
                placeholder={error ? error : "Type in here…"}
                variant='outlined'
                size='md'
                color={error ? "danger" : "primary"}
                value={!!error ? error : title}
                sx={{
                    "--Input-focusedThickness": "2px",
                    "--Input-radius": "19px",
                    "--Input-gap": "7px",
                    "--Input-placeholderOpacity": 0.5,
                    "--Input-minHeight": "40px",
                    "--Input-paddingInline": "11px",
                    "--Input-decoratorChildHeight": "35px",
                    width: "300px",
                }}
                endDecorator={
                    <ButtonCustom
                        size='medium'
                        variant='outlined'
                        style={{
                            display: "inline-flex",
                            border: "none",
                            alignItems: "center",
                            borderRadius: "50%",
                            backgroundColor: error ? "#d2194a" : "#1976d2",
                            color: "#fff",
                            fontWeight: "600",
                        }}
                        buttonName={"+"}
                        callBack={addTaskHandler}
                    />
                }
            />
        </div>
    )
}