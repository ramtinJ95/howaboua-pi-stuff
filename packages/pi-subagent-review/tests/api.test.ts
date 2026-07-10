import { expect, test } from "bun:test";
import reviewExtension from "@howaboua/pi-subagent-review";
import {
	buildReviewConversationSummary,
	buildReviewTask,
	createChildRunDetails,
	detectReviewContext,
	getFinalOutput,
	isSubagentFailure,
	resolveReviewConfig,
	runReviewSubagent,
} from "@howaboua/pi-subagent-review/api";

test("preserves the default extension export", () => {
	expect(reviewExtension).toBeInstanceOf(Function);
});

test("exports reusable review primitives from the public API", () => {
	expect([
		buildReviewConversationSummary,
		buildReviewTask,
		createChildRunDetails,
		detectReviewContext,
		getFinalOutput,
		isSubagentFailure,
		resolveReviewConfig,
		runReviewSubagent,
	]).toEqual(new Array(8).fill(expect.any(Function)));
});
