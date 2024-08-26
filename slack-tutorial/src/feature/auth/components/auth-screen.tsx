// クライアントコンポーネントにするには、ファイルの最上部に "use client" を追加します
"use client";

import { useState } from "react";
import { SignInFlow } from "../types";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");
    return (
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                Auth screen
            </div>
        </div>
    )
}