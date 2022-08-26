import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis();
    //some button that connect us and changes connected to be true

    useEffect(() => {
        if (isWeb3Enabled) return;
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3();
            }
        }
        console.log("Hi!");
        console.log(isWeb3Enabled);
    }, [isWeb3Enabled]); //DEPENDENCY ARRAY: automatically run on load => then, it'll run checking the value
    //},    NO DEPENDENCY ARRAY: run anytime something re-renders => CAREFUL with this!! Because then you can get circular renders
    //}, [] BLANK DEPENDECY ARRAY: run once on load

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`);
            if (account == null) {
                window.localStorage.removeItem("connected");
                deactivateWeb3();
                console.log("Null account found");
            }
        });
    }, []);

    return (
        <div>
            {account ? (
                <div>
                    <h2>
                        Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                    </h2>
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3();
                        if (typeof window !== "undefined") {
                            window.localStorage.setItem("connected", "injected");
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect!
                </button>
            )}
        </div>
    );
}

//I'm going to show you the hard way first
//Then the easy way

//learning how to calculate a derivative
//learning the shortcut
