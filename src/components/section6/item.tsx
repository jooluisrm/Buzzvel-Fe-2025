import { Profile } from "./profile";

export const Item = () => {
    return (
        <div className="bg-white shadow-2xl min-w-[309px] min-h-[323px] lg:min-w-[412px] lg:min-h-[305px] p-4 lg:p-[32px] rounded-xl flex flex-col justify-between">
            <p className="text-[18px] text-black">
                Lacus vestibulum ultricies mi risus, duis non,
                volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur.
                Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.
            </p>
            <div>
                <Profile />
            </div>
        </div>
    );
}