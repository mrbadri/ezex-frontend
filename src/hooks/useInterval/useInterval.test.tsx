import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test, vitest } from "vitest";
import { useInterval } from "./useInterval";

const mockSetInterval = () => {
    vitest.spyOn(global, "setInterval");
};

const mockClearInterval = () => {
    vitest.spyOn(global, "clearInterval");
};

describe("useInterval()", () => {
    beforeEach(() => {
        vitest.clearAllMocks();
        vitest.useFakeTimers();
    });

    test("should fire the callback function (1)", () => {
        const timeout = 500;
        const callback = vitest.fn();

        renderHook(() => {
            useInterval(callback, timeout);
        });
        vitest.advanceTimersByTime(timeout);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    test("should fire the callback function (2)", () => {
        const timeout = 500;
        const earlyTimeout = 400;
        const callback = vitest.fn();

        renderHook(() => {
            useInterval(callback, timeout);
        });
        vitest.advanceTimersByTime(earlyTimeout);
        expect(callback).not.toHaveBeenCalled();
    });

    test("should call set interval on start", () => {
        mockSetInterval();
        const timeout = 1200;
        const callback = vitest.fn();

        renderHook(() => {
            useInterval(callback, timeout);
        });
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenCalledWith(expect.any(Function), timeout);
    });

    test("should call clearTimeout on unmount", () => {
        mockClearInterval();
        const callback = vitest.fn();
        const { unmount } = renderHook(() => {
            useInterval(callback, 1200);
        });

        unmount();
        expect(clearInterval).toHaveBeenCalledTimes(1);
    });
});
