import * as fs from "node:fs";
import path from "node:path";

import ts from "typescript";
import * as uom from "uom-types";
import { describe, expect, it } from "vitest";

import * as uomEffect from "../src/index.ts";

describe("exports", () => {
  it("exports all runtime identifiers from uom-types", () => {
    for (const key of Object.keys(uom)) {
      expect(uomEffect).toHaveProperty(key);
    }
  });

  // Note: This test works on dist files so build first.
  it("exports all types from uom-types", () => {
    const testFilename = "file.ts";
    const code = `
        import * as uom from "uom-types";
        import * as uomEffect from "effect-uom";
      `;
    const sourceFile = ts.createSourceFile(testFilename, code, ts.ScriptTarget.Latest);

    const options: ts.CompilerOptions = {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext,
      moduleResolution: ts.ModuleResolutionKind.NodeNext,
      strict: true,
      noEmit: true,
    };

    const defaultCompilerHost = ts.createCompilerHost(options);

    const customCompilerHost: ts.CompilerHost = {
      ...defaultCompilerHost,
      getSourceFile: (filename, languageVersion) => {
        if (filename === testFilename) {
          return sourceFile;
        }

        return defaultCompilerHost.getSourceFile(filename, languageVersion);
      },
      getCurrentDirectory: () => path.resolve(import.meta.dirname, ".."),
    };

    const program = ts.createProgram([testFilename], options, customCompilerHost);

    const uomImport = (sourceFile.statements[0]! as ts.ImportDeclaration).importClause!
      .namedBindings! as ts.NamespaceImport;
    const uomImportType = program.getTypeChecker().getTypeAtLocation(uomImport);
    const uomExports = new Set(uomImportType.getSymbol()?.exports?.keys());
    expect(uomExports).not.toBeUndefined();

    const uomEffectImport = (sourceFile.statements[1]! as ts.ImportDeclaration).importClause!
      .namedBindings! as ts.NamespaceImport;
    const uomEffectImportType = program.getTypeChecker().getTypeAtLocation(uomEffectImport);
    const uomEffectExports = new Set(uomEffectImportType.getSymbol()?.exports?.keys());
    expect(uomEffectExports).not.toBeUndefined();

    const excludeExports = new Set(["Brand"]);

    for (const key of uomExports) {
      if (excludeExports.has(key as string)) {
        expect(uomEffectExports).not.toContain(key);
      } else {
        expect(uomEffectExports).toContain(key);
      }
    }
  }, 20_000);
});
