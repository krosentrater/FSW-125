{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.25.0",
    "http-proxy-middleware": "^2.0.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "uuid": "^8.3.2",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

{
  "name": "client",
  "version": "0.1.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@ampproject/remapping": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.1.0.tgz",
      "integrity": "sha512-d5RysTlJ7hmw5Tw4UxgxcY3lkMe92n8sXCcuLPAyIAHK6j8DefDwtGnVVDgOnv+RnEosulDJ9NPKQL27bDId0g==",
      "requires": {
        "@jridgewell/trace-mapping": "^0.3.0"
      }
    },
    "@apideck/better-ajv-errors": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/@apideck/better-ajv-errors/-/better-ajv-errors-0.3.2.tgz",
      "integrity": "sha512-JdEazx7qiVqTBzzBl5rolRwl5cmhihjfIcpqRzIZjtT6b18liVmDn/VlWpqW4C/qP2hrFFMLRV1wlex8ZVBPTg==",
      "requires": {
        "json-schema": "^0.4.0",
        "jsonpointer": "^5.0.0",
        "leven": "^3.1.0"
      }
    },
    "@babel/code-frame": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.16.7.tgz",
      "integrity": "sha512-iAXqUn8IIeBTNd72xsFlgaXHkMBMt6y4HJp1tIaK465CWLT/fG1aqB7ykr95gHHmlBdGbFeWWfyB4NJJ0nmeIg==",
      "requires": {
        "@babel/highlight": "^7.16.7"
      }
    },
    "@babel/compat-data": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.17.0.tgz",
      "integrity": "sha512-392byTlpGWXMv4FbyWw3sAZ/FrW/DrwqLGXpy0mbyNe9Taqv1mg9yON5/o0cnr8XYCkFTZbC1eV+c+LAROgrng=="
    },
    "@babel/core": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.17.0.tgz",
      "integrity": "sha512-x/5Ea+RO5MvF9ize5DeVICJoVrNv0Mi2RnIABrZEKYvPEpldXwauPkgvYA17cKa6WpU3LoYvYbuEMFtSNFsarA==",
      "requires": {
        "@ampproject/remapping": "^2.0.0",
        "@babel/code-frame": "^7.16.7",
        "@babel/generator": "^7.17.0",
        "@babel/helper-compilation-targets": "^7.16.7",
        "@babel/helper-module-transforms": "^7.16.7",
        "@babel/helpers": "^7.17.0",
        "@babel/parser": "^7.17.0",
        "@babel/template": "^7.16.7",
        "@babel/traverse": "^7.17.0",
        "@babel/types": "^7.17.0",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "@babel/eslint-parser": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/eslint-parser/-/eslint-parser-7.17.0.tgz",
      "integrity": "sha512-PUEJ7ZBXbRkbq3qqM/jZ2nIuakUBqCYc7Qf52Lj7dlZ6zERnqisdHioL0l4wwQZnmskMeasqUNzLBFKs3nylXA==",
      "requires": {
        "eslint-scope": "^5.1.1",
        "eslint-visitor-keys": "^2.1.0",
        "semver": "^6.3.0"
      },
      "dependencies": {
        "eslint-scope": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
          "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
          "requires": {
            "esrecurse": "^4.3.0",
            "estraverse": "^4.1.1"
          }
        },
        "eslint-visitor-keys": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.1.0.tgz",
          "integrity": "sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw=="
        },
        "estraverse": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
          "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "@babel/generator": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.17.0.tgz",
      "integrity": "sha512-I3Omiv6FGOC29dtlZhkfXO6pgkmukJSlT26QjVvS1DGZe/NzSVCPG41X0tS21oZkJYlovfj9qDWgKP+Cn4bXxw==",
      "requires": {
        "@babel/types": "^7.17.0",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      }
    },
    "@babel/helper-annotate-as-pure": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.16.7.tgz",
      "integrity": "sha512-s6t2w/IPQVTAET1HitoowRGXooX8mCgtuP5195wD/QJPV6wYjpujCGF7JuMODVX2ZAJOf1GT6DT9MHEZvLOFSw==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.16.7.tgz",
      "integrity": "sha512-C6FdbRaxYjwVu/geKW4ZeQ0Q31AftgRcdSnZ5/jsH6BzCJbtvXvhpfkbkThYSuutZA7nCXpPR6AD9zd1dprMkA==",
      "requires": {
        "@babel/helper-explode-assignable-expression": "^7.16.7",
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-compilation-targets": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.16.7.tgz",
      "integrity": "sha512-mGojBwIWcwGD6rfqgRXVlVYmPAv7eOpIemUG3dGnDdCY4Pae70ROij3XmfrH6Fa1h1aiDylpglbZyktfzyo/hA==",
      "requires": {
        "@babel/compat-data": "^7.16.4",
        "@babel/helper-validator-option": "^7.16.7",
        "browserslist": "^4.17.5",
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "@babel/helper-create-class-features-plugin": {
      "version": "7.17.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.17.1.tgz",
      "integrity": "sha512-JBdSr/LtyYIno/pNnJ75lBcqc3Z1XXujzPanHqjvvrhOA+DTceTFuJi8XjmWTZh4r3fsdfqaCMN0iZemdkxZHQ==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "@babel/helper-environment-visitor": "^7.16.7",
        "@babel/helper-function-name": "^7.16.7",
        "@babel/helper-member-expression-to-functions": "^7.16.7",
        "@babel/helper-optimise-call-expression": "^7.16.7",
        "@babel/helper-replace-supers": "^7.16.7",
        "@babel/helper-split-export-declaration": "^7.16.7"
      }
    },
    "@babel/helper-create-regexp-features-plugin": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.17.0.tgz",
      "integrity": "sha512-awO2So99wG6KnlE+TPs6rn83gCz5WlEePJDTnLEqbchMVrBeAujURVphRdigsk094VhvZehFoNOihSlcBjwsXA==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "regexpu-core": "^5.0.1"
      }
    },
    "@babel/helper-define-polyfill-provider": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.3.1.tgz",
      "integrity": "sha512-J9hGMpJQmtWmj46B3kBHmL38UhJGhYX7eqkcq+2gsstyYt341HmPeWspihX43yVRA0mS+8GGk2Gckc7bY/HCmA==",
      "requires": {
        "@babel/helper-compilation-targets": "^7.13.0",
        "@babel/helper-module-imports": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/traverse": "^7.13.0",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2",
        "semver": "^6.1.2"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "@babel/helper-environment-visitor": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.16.7.tgz",
      "integrity": "sha512-SLLb0AAn6PkUeAfKJCCOl9e1R53pQlGAfc4y4XuMRZfqeMYLE0dM1LMhqbGAlGQY0lfw5/ohoYWAe9V1yibRag==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-explode-assignable-expression": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.16.7.tgz",
      "integrity": "sha512-KyUenhWMC8VrxzkGP0Jizjo4/Zx+1nNZhgocs+gLzyZyB8SHidhoq9KK/8Ato4anhwsivfkBLftky7gvzbZMtQ==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-function-name": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.16.7.tgz",
      "integrity": "sha512-QfDfEnIUyyBSR3HtrtGECuZ6DAyCkYFp7GHl75vFtTnn6pjKeK0T1DB5lLkFvBea8MdaiUABx3osbgLyInoejA==",
      "requires": {
        "@babel/helper-get-function-arity": "^7.16.7",
        "@babel/template": "^7.16.7",
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.16.7.tgz",
      "integrity": "sha512-flc+RLSOBXzNzVhcLu6ujeHUrD6tANAOU5ojrRx/as+tbzf8+stUCj7+IfRRoAbEZqj/ahXEMsjhOhgeZsrnTw==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-hoist-variables": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.16.7.tgz",
      "integrity": "sha512-m04d/0Op34H5v7pbZw6pSKP7weA6lsMvfiIAMeIvkY/R4xQtBSMFEigu9QTZ2qB/9l22vsxtM8a+Q8CzD255fg==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-member-expression-to-functions": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.16.7.tgz",
      "integrity": "sha512-VtJ/65tYiU/6AbMTDwyoXGPKHgTsfRarivm+YbB5uAzKUyuPjgZSgAFeG87FCigc7KNHu2Pegh1XIT3lXjvz3Q==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-module-imports": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.16.7.tgz",
      "integrity": "sha512-LVtS6TqjJHFc+nYeITRo6VLXve70xmq7wPhWTqDJusJEgGmkAACWwMiTNrvfoQo6hEhFwAIixNkvB0jPXDL8Wg==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-module-transforms": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.16.7.tgz",
      "integrity": "sha512-gaqtLDxJEFCeQbYp9aLAefjhkKdjKcdh6DB7jniIGU3Pz52WAmP268zK0VgPz9hUNkMSYeH976K2/Y6yPadpng==",
      "requires": {
        "@babel/helper-environment-visitor": "^7.16.7",
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/helper-simple-access": "^7.16.7",
        "@babel/helper-split-export-declaration": "^7.16.7",
        "@babel/helper-validator-identifier": "^7.16.7",
        "@babel/template": "^7.16.7",
        "@babel/traverse": "^7.16.7",
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-optimise-call-expression": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.16.7.tgz",
      "integrity": "sha512-EtgBhg7rd/JcnpZFXpBy0ze1YRfdm7BnBX4uKMBd3ixa3RGAE002JZB66FJyNH7g0F38U05pXmA5P8cBh7z+1w==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-plugin-utils": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.16.7.tgz",
      "integrity": "sha512-Qg3Nk7ZxpgMrsox6HreY1ZNKdBq7K72tDSliA6dCl5f007jR4ne8iD5UzuNnCJH2xBf2BEEVGr+/OL6Gdp7RxA=="
    },
    "@babel/helper-remap-async-to-generator": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.16.8.tgz",
      "integrity": "sha512-fm0gH7Flb8H51LqJHy3HJ3wnE1+qtYR2A99K06ahwrawLdOFsCEWjZOrYricXJHoPSudNKxrMBUPEIPxiIIvBw==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "@babel/helper-wrap-function": "^7.16.8",
        "@babel/types": "^7.16.8"
      }
    },
    "@babel/helper-replace-supers": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.16.7.tgz",
      "integrity": "sha512-y9vsWilTNaVnVh6xiJfABzsNpgDPKev9HnAgz6Gb1p6UUwf9NepdlsV7VXGCftJM+jqD5f7JIEubcpLjZj5dBw==",
      "requires": {
        "@babel/helper-environment-visitor": "^7.16.7",
        "@babel/helper-member-expression-to-functions": "^7.16.7",
        "@babel/helper-optimise-call-expression": "^7.16.7",
        "@babel/traverse": "^7.16.7",
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-simple-access": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.16.7.tgz",
      "integrity": "sha512-ZIzHVyoeLMvXMN/vok/a4LWRy8G2v205mNP0XOuf9XRLyX5/u9CnVulUtDgUTama3lT+bf/UqucuZjqiGuTS1g==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.16.0.tgz",
      "integrity": "sha512-+il1gTy0oHwUsBQZyJvukbB4vPMdcYBrFHa0Uc4AizLxbq6BOYC51Rv4tWocX9BLBDLZ4kc6qUFpQ6HRgL+3zw==",
      "requires": {
        "@babel/types": "^7.16.0"
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.16.7.tgz",
      "integrity": "sha512-xbWoy/PFoxSWazIToT9Sif+jJTlrMcndIsaOKvTA6u7QEo7ilkRZpjew18/W3c7nm8fXdUDXh02VXTbZ0pGDNw==",
      "requires": {
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/helper-validator-identifier": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.16.7.tgz",
      "integrity": "sha512-hsEnFemeiW4D08A5gUAZxLBTXpZ39P+a+DGDsHw1yxqyQ/jzFEnxf5uTEGp+3bzAbNOxU1paTgYS4ECU/IgfDw=="
    },
    "@babel/helper-validator-option": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.16.7.tgz",
      "integrity": "sha512-TRtenOuRUVo9oIQGPC5G9DgK4743cdxvtOw0weQNpZXaS16SCBi5MNjZF8vba3ETURjZpTbVn7Vvcf2eAwFozQ=="
    },
    "@babel/helper-wrap-function": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.16.8.tgz",
      "integrity": "sha512-8RpyRVIAW1RcDDGTA+GpPAwV22wXCfKOoM9bet6TLkGIFTkRQSkH1nMQ5Yet4MpoXe1ZwHPVtNasc2w0uZMqnw==",
      "requires": {
        "@babel/helper-function-name": "^7.16.7",
        "@babel/template": "^7.16.7",
        "@babel/traverse": "^7.16.8",
        "@babel/types": "^7.16.8"
      }
    },
    "@babel/helpers": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.17.0.tgz",
      "integrity": "sha512-Xe/9NFxjPwELUvW2dsukcMZIp6XwPSbI4ojFBJuX5ramHuVE22SVcZIwqzdWo5uCgeTXW8qV97lMvSOjq+1+nQ==",
      "requires": {
        "@babel/template": "^7.16.7",
        "@babel/traverse": "^7.17.0",
        "@babel/types": "^7.17.0"
      }
    },
    "@babel/highlight": {
      "version": "7.16.10",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.16.10.tgz",
      "integrity": "sha512-5FnTQLSLswEj6IkgVw5KusNUUFY9ZGqe/TRFnP/BKYHYgfh7tc+C7mwiy95/yNP7Dh9x580Vv8r7u7ZfTBFxdw==",
      "requires": {
        "@babel/helper-validator-identifier": "^7.16.7",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      }
    },
    "@babel/parser": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.17.0.tgz",
      "integrity": "sha512-VKXSCQx5D8S04ej+Dqsr1CzYvvWgf20jIw2D+YhQCrIlr2UZGaDds23Y0xg75/skOxpLCRpUZvk/1EAVkGoDOw=="
    },
    "@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression/-/plugin-bugfix-safari-id-destructuring-collision-in-function-expression-7.16.7.tgz",
      "integrity": "sha512-anv/DObl7waiGEnC24O9zqL0pSuI9hljihqiDuFHC8d7/bjr/4RLGPWuc8rYOff/QPzbEPSkzG8wGG9aDuhHRg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.16.7.tgz",
      "integrity": "sha512-di8vUHRdf+4aJ7ltXhaDbPoszdkh59AQtJM5soLsuHpQJdFQZOA4uGj0V2u/CZ8bJ/u8ULDL5yq6FO/bCXnKHw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.16.0",
        "@babel/plugin-proposal-optional-chaining": "^7.16.7"
      }
    },
    "@babel/plugin-proposal-async-generator-functions": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.16.8.tgz",
      "integrity": "sha512-71YHIvMuiuqWJQkebWJtdhQTfd4Q4mF76q2IX37uZPkG9+olBxsX+rH1vkhFto4UeJZ9dPY2s+mDvhDm1u2BGQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-remap-async-to-generator": "^7.16.8",
        "@babel/plugin-syntax-async-generators": "^7.8.4"
      }
    },
    "@babel/plugin-proposal-class-properties": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.16.7.tgz",
      "integrity": "sha512-IobU0Xme31ewjYOShSIqd/ZGM/r/cuOz2z0MDbNrhF5FW+ZVgi0f2lyeoj9KFPDOAqsYxmLWZte1WOwlvY9aww==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-proposal-class-static-block": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-static-block/-/plugin-proposal-class-static-block-7.16.7.tgz",
      "integrity": "sha512-dgqJJrcZoG/4CkMopzhPJjGxsIe9A8RlkQLnL/Vhhx8AA9ZuaRwGSlscSh42hazc7WSrya/IK7mTeoF0DP9tEw==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-class-static-block": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-decorators": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-decorators/-/plugin-proposal-decorators-7.17.0.tgz",
      "integrity": "sha512-JR8HTf3T1CsdMqfENrZ9pqncwsH4sPcvsyDLpvmv8iIbpDmeyBD7HPfGAIqkQph2j5d3B84hTm+m3qHPAedaPw==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.17.0",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-replace-supers": "^7.16.7",
        "@babel/plugin-syntax-decorators": "^7.17.0",
        "charcodes": "^0.2.0"
      }
    },
    "@babel/plugin-proposal-dynamic-import": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.16.7.tgz",
      "integrity": "sha512-I8SW9Ho3/8DRSdmDdH3gORdyUuYnk1m4cMxUAdu5oy4n3OfN8flDEH+d60iG7dUfi0KkYwSvoalHzzdRzpWHTg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-export-namespace-from": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.16.7.tgz",
      "integrity": "sha512-ZxdtqDXLRGBL64ocZcs7ovt71L3jhC1RGSyR996svrCi3PYqHNkb3SwPJCs8RIzD86s+WPpt2S73+EHCGO+NUA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-json-strings": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.16.7.tgz",
      "integrity": "sha512-lNZ3EEggsGY78JavgbHsK9u5P3pQaW7k4axlgFLYkMd7UBsiNahCITShLjNQschPyjtO6dADrL24757IdhBrsQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-json-strings": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-logical-assignment-operators": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.16.7.tgz",
      "integrity": "sha512-K3XzyZJGQCr00+EtYtrDjmwX7o7PLK6U9bi1nCwkQioRFVUv6dJoxbQjtWVtP+bCPy82bONBKG8NPyQ4+i6yjg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-nullish-coalescing-operator": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.16.7.tgz",
      "integrity": "sha512-aUOrYU3EVtjf62jQrCj63pYZ7k6vns2h/DQvHPWGmsJRYzWXZ6/AsfgpiRy6XiuIDADhJzP2Q9MwSMKauBQ+UQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-numeric-separator": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.16.7.tgz",
      "integrity": "sha512-vQgPMknOIgiuVqbokToyXbkY/OmmjAzr/0lhSIbG/KmnzXPGwW/AdhdKpi+O4X/VkWiWjnkKOBiqJrTaC98VKw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-object-rest-spread": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.16.7.tgz",
      "integrity": "sha512-3O0Y4+dw94HA86qSg9IHfyPktgR7q3gpNVAeiKQd+8jBKFaU5NQS1Yatgo4wY+UFNuLjvxcSmzcsHqrhgTyBUA==",
      "requires": {
        "@babel/compat-data": "^7.16.4",
        "@babel/helper-compilation-targets": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-transform-parameters": "^7.16.7"
      }
    },
    "@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.16.7.tgz",
      "integrity": "sha512-eMOH/L4OvWSZAE1VkHbr1vckLG1WUcHGJSLqqQwl2GaUqG6QjddvrOaTUMNYiv77H5IKPMZ9U9P7EaHwvAShfA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-optional-chaining": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.16.7.tgz",
      "integrity": "sha512-eC3xy+ZrUcBtP7x+sq62Q/HYd674pPTb/77XZMb5wbDPGWIdUbSr4Agr052+zaUPSb+gGRnjxXfKFvx5iMJ+DA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.16.0",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-private-methods": {
      "version": "7.16.11",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.16.11.tgz",
      "integrity": "sha512-F/2uAkPlXDr8+BHpZvo19w3hLFKge+k75XUprE6jaqKxjGkSYcK+4c+bup5PdW/7W/Rpjwql7FTVEDW+fRAQsw==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.16.10",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-proposal-private-property-in-object": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-property-in-object/-/plugin-proposal-private-property-in-object-7.16.7.tgz",
      "integrity": "sha512-rMQkjcOFbm+ufe3bTZLyOfsOUOxyvLXZJCTARhJr+8UMSoZmqTe1K1BgkFcrW37rAchWg57yI69ORxiWvUINuQ==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "@babel/helper-create-class-features-plugin": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.16.7.tgz",
      "integrity": "sha512-QRK0YI/40VLhNVGIjRNAAQkEHws0cswSdFFjpFyt943YmJIU1da9uW63Iu6NFV6CxTZW5eTDCrwZUstBWgp/Rg==",
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-bigint": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz",
      "integrity": "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-class-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
      "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-syntax-class-static-block": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
      "integrity": "sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-decorators": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-decorators/-/plugin-syntax-decorators-7.17.0.tgz",
      "integrity": "sha512-qWe85yCXsvDEluNP0OyeQjH63DlhAR3W7K9BxxU1MvbDb48tgBG+Ao6IJJ6smPDrrVzSQZrbF6donpkFBMcs3A==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-syntax-dynamic-import": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
      "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-export-namespace-from": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
      "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.3"
      }
    },
    "@babel/plugin-syntax-flow": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.16.7.tgz",
      "integrity": "sha512-UDo3YGQO0jH6ytzVwgSLv9i/CzMcUjbKenL67dTrAZPPv6GFAtDhe6jqnvmoKzC/7htNTohhos+onPtDMqJwaQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-syntax-import-meta": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
      "integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-jsx": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.16.7.tgz",
      "integrity": "sha512-Esxmk7YjA8QysKeT3VhTXvF6y77f/a91SIs4pWb4H2eWGQkCKFgQaG6hdoEVZtGsrAcb2K5BW66XsOErD4WU3Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-private-property-in-object": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
      "integrity": "sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-top-level-await": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
      "integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-typescript": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.16.7.tgz",
      "integrity": "sha512-YhUIJHHGkqPgEcMYkPCKTyGUdoGKWtopIycQyjJH8OjvRgOYsXsaKehLVPScKJWAULPxMa4N1vCe6szREFlZ7A==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-arrow-functions": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.16.7.tgz",
      "integrity": "sha512-9ffkFFMbvzTvv+7dTp/66xvZAWASuPD5Tl9LK3Z9vhOmANo6j94rik+5YMBt4CwHVMWLWpMsriIc2zsa3WW3xQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-async-to-generator": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.16.8.tgz",
      "integrity": "sha512-MtmUmTJQHCnyJVrScNzNlofQJ3dLFuobYn3mwOTKHnSCMtbNsqvF71GQmJfFjdrXSsAA7iysFmYWw4bXZ20hOg==",
      "requires": {
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-remap-async-to-generator": "^7.16.8"
      }
    },
    "@babel/plugin-transform-block-scoped-functions": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.16.7.tgz",
      "integrity": "sha512-JUuzlzmF40Z9cXyytcbZEZKckgrQzChbQJw/5PuEHYeqzCsvebDx0K0jWnIIVcmmDOAVctCgnYs0pMcrYj2zJg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-block-scoping": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.16.7.tgz",
      "integrity": "sha512-ObZev2nxVAYA4bhyusELdo9hb3H+A56bxH3FZMbEImZFiEDYVHXQSJ1hQKFlDnlt8G9bBrCZ5ZpURZUrV4G5qQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-classes": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.16.7.tgz",
      "integrity": "sha512-WY7og38SFAGYRe64BrjKf8OrE6ulEHtr5jEYaZMwox9KebgqPi67Zqz8K53EKk1fFEJgm96r32rkKZ3qA2nCWQ==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "@babel/helper-environment-visitor": "^7.16.7",
        "@babel/helper-function-name": "^7.16.7",
        "@babel/helper-optimise-call-expression": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-replace-supers": "^7.16.7",
        "@babel/helper-split-export-declaration": "^7.16.7",
        "globals": "^11.1.0"
      }
    },
    "@babel/plugin-transform-computed-properties": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.16.7.tgz",
      "integrity": "sha512-gN72G9bcmenVILj//sv1zLNaPyYcOzUho2lIJBMh/iakJ9ygCo/hEF9cpGb61SCMEDxbbyBoVQxrt+bWKu5KGw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-destructuring": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.16.7.tgz",
      "integrity": "sha512-VqAwhTHBnu5xBVDCvrvqJbtLUa++qZaWC0Fgr2mqokBlulZARGyIvZDoqbPlPaKImQ9dKAcCzbv+ul//uqu70A==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-dotall-regex": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.16.7.tgz",
      "integrity": "sha512-Lyttaao2SjZF6Pf4vk1dVKv8YypMpomAbygW+mU5cYP3S5cWTfCJjG8xV6CFdzGFlfWK81IjL9viiTvpb6G7gQ==",
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-duplicate-keys": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.16.7.tgz",
      "integrity": "sha512-03DvpbRfvWIXyK0/6QiR1KMTWeT6OcQ7tbhjrXyFS02kjuX/mu5Bvnh5SDSWHxyawit2g5aWhKwI86EE7GUnTw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-exponentiation-operator": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.16.7.tgz",
      "integrity": "sha512-8UYLSlyLgRixQvlYH3J2ekXFHDFLQutdy7FfFAMm3CPZ6q9wHCwnUyiXpQCe3gVVnQlHc5nsuiEVziteRNTXEA==",
      "requires": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-flow-strip-types": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.16.7.tgz",
      "integrity": "sha512-mzmCq3cNsDpZZu9FADYYyfZJIOrSONmHcop2XEKPdBNMa4PDC4eEvcOvzZaCNcjKu72v0XQlA5y1g58aLRXdYg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-flow": "^7.16.7"
      }
    },
    "@babel/plugin-transform-for-of": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.16.7.tgz",
      "integrity": "sha512-/QZm9W92Ptpw7sjI9Nx1mbcsWz33+l8kuMIQnDwgQBG5s3fAfQvkRjQ7NqXhtNcKOnPkdICmUHyCaWW06HCsqg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-function-name": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.16.7.tgz",
      "integrity": "sha512-SU/C68YVwTRxqWj5kgsbKINakGag0KTgq9f2iZEXdStoAbOzLHEBRYzImmA6yFo8YZhJVflvXmIHUO7GWHmxxA==",
      "requires": {
        "@babel/helper-compilation-targets": "^7.16.7",
        "@babel/helper-function-name": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-literals": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.16.7.tgz",
      "integrity": "sha512-6tH8RTpTWI0s2sV6uq3e/C9wPo4PTqqZps4uF0kzQ9/xPLFQtipynvmT1g/dOfEJ+0EQsHhkQ/zyRId8J2b8zQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-member-expression-literals": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.16.7.tgz",
      "integrity": "sha512-mBruRMbktKQwbxaJof32LT9KLy2f3gH+27a5XSuXo6h7R3vqltl0PgZ80C8ZMKw98Bf8bqt6BEVi3svOh2PzMw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-modules-amd": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.16.7.tgz",
      "integrity": "sha512-KaaEtgBL7FKYwjJ/teH63oAmE3lP34N3kshz8mm4VMAw7U3PxjVwwUmxEFksbgsNUaO3wId9R2AVQYSEGRa2+g==",
      "requires": {
        "@babel/helper-module-transforms": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-commonjs": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.16.8.tgz",
      "integrity": "sha512-oflKPvsLT2+uKQopesJt3ApiaIS2HW+hzHFcwRNtyDGieAeC/dIHZX8buJQ2J2X1rxGPy4eRcUijm3qcSPjYcA==",
      "requires": {
        "@babel/helper-module-transforms": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-simple-access": "^7.16.7",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-systemjs": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.16.7.tgz",
      "integrity": "sha512-DuK5E3k+QQmnOqBR9UkusByy5WZWGRxfzV529s9nPra1GE7olmxfqO2FHobEOYSPIjPBTr4p66YDcjQnt8cBmw==",
      "requires": {
        "@babel/helper-hoist-variables": "^7.16.7",
        "@babel/helper-module-transforms": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-validator-identifier": "^7.16.7",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-umd": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.16.7.tgz",
      "integrity": "sha512-EMh7uolsC8O4xhudF2F6wedbSHm1HHZ0C6aJ7K67zcDNidMzVcxWdGr+htW9n21klm+bOn+Rx4CBsAntZd3rEQ==",
      "requires": {
        "@babel/helper-module-transforms": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.16.8.tgz",
      "integrity": "sha512-j3Jw+n5PvpmhRR+mrgIh04puSANCk/T/UA3m3P1MjJkhlK906+ApHhDIqBQDdOgL/r1UYpz4GNclTXxyZrYGSw==",
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.16.7"
      }
    },
    "@babel/plugin-transform-new-target": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.16.7.tgz",
      "integrity": "sha512-xiLDzWNMfKoGOpc6t3U+etCE2yRnn3SM09BXqWPIZOBpL2gvVrBWUKnsJx0K/ADi5F5YC5f8APFfWrz25TdlGg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-object-super": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.16.7.tgz",
      "integrity": "sha512-14J1feiQVWaGvRxj2WjyMuXS2jsBkgB3MdSN5HuC2G5nRspa5RK9COcs82Pwy5BuGcjb+fYaUj94mYcOj7rCvw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-replace-supers": "^7.16.7"
      }
    },
    "@babel/plugin-transform-parameters": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.16.7.tgz",
      "integrity": "sha512-AT3MufQ7zZEhU2hwOA11axBnExW0Lszu4RL/tAlUJBuNoRak+wehQW8h6KcXOcgjY42fHtDxswuMhMjFEuv/aw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-property-literals": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.16.7.tgz",
      "integrity": "sha512-z4FGr9NMGdoIl1RqavCqGG+ZuYjfZ/hkCIeuH6Do7tXmSm0ls11nYVSJqFEUOSJbDab5wC6lRE/w6YjVcr6Hqw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-react-constant-elements": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-constant-elements/-/plugin-transform-react-constant-elements-7.16.7.tgz",
      "integrity": "sha512-lF+cfsyTgwWkcw715J88JhMYJ5GpysYNLhLP1PkvkhTRN7B3e74R/1KsDxFxhRpSn0UUD3IWM4GvdBR2PEbbQQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-react-display-name": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.16.7.tgz",
      "integrity": "sha512-qgIg8BcZgd0G/Cz916D5+9kqX0c7nPZyXaP8R2tLNN5tkyIZdG5fEwBrxwplzSnjC1jvQmyMNVwUCZPcbGY7Pg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-react-jsx": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.16.7.tgz",
      "integrity": "sha512-8D16ye66fxiE8m890w0BpPpngG9o9OVBBy0gH2E+2AR7qMR2ZpTYJEqLxAsoroenMId0p/wMW+Blc0meDgu0Ag==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-jsx": "^7.16.7",
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/plugin-transform-react-jsx-development": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-development/-/plugin-transform-react-jsx-development-7.16.7.tgz",
      "integrity": "sha512-RMvQWvpla+xy6MlBpPlrKZCMRs2AGiHOGHY3xRwl0pEeim348dDyxeH4xBsMPbIMhujeq7ihE702eM2Ew0Wo+A==",
      "requires": {
        "@babel/plugin-transform-react-jsx": "^7.16.7"
      }
    },
    "@babel/plugin-transform-react-pure-annotations": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-pure-annotations/-/plugin-transform-react-pure-annotations-7.16.7.tgz",
      "integrity": "sha512-hs71ToC97k3QWxswh2ElzMFABXHvGiJ01IB1TbYQDGeWRKWz/MPUTh5jGExdHvosYKpnJW5Pm3S4+TA3FyX+GA==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-regenerator": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.16.7.tgz",
      "integrity": "sha512-mF7jOgGYCkSJagJ6XCujSQg+6xC1M77/03K2oBmVJWoFGNUtnVJO4WHKJk3dnPC8HCcj4xBQP1Egm8DWh3Pb3Q==",
      "requires": {
        "regenerator-transform": "^0.14.2"
      }
    },
    "@babel/plugin-transform-reserved-words": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.16.7.tgz",
      "integrity": "sha512-KQzzDnZ9hWQBjwi5lpY5v9shmm6IVG0U9pB18zvMu2i4H90xpT4gmqwPYsn8rObiadYe2M0gmgsiOIF5A/2rtg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-runtime": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.17.0.tgz",
      "integrity": "sha512-fr7zPWnKXNc1xoHfrIU9mN/4XKX4VLZ45Q+oMhfsYIaHvg7mHgmhfOy/ckRWqDK7XF3QDigRpkh5DKq6+clE8A==",
      "requires": {
        "@babel/helper-module-imports": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "babel-plugin-polyfill-corejs2": "^0.3.0",
        "babel-plugin-polyfill-corejs3": "^0.5.0",
        "babel-plugin-polyfill-regenerator": "^0.3.0",
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "@babel/plugin-transform-shorthand-properties": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.16.7.tgz",
      "integrity": "sha512-hah2+FEnoRoATdIb05IOXf+4GzXYTq75TVhIn1PewihbpyrNWUt2JbudKQOETWw6QpLe+AIUpJ5MVLYTQbeeUg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-spread": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.16.7.tgz",
      "integrity": "sha512-+pjJpgAngb53L0iaA5gU/1MLXJIfXcYepLgXB3esVRf4fqmj8f2cxM3/FKaHsZms08hFQJkFccEWuIpm429TXg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.16.0"
      }
    },
    "@babel/plugin-transform-sticky-regex": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.16.7.tgz",
      "integrity": "sha512-NJa0Bd/87QV5NZZzTuZG5BPJjLYadeSZ9fO6oOUoL4iQx+9EEuw/eEM92SrsT19Yc2jgB1u1hsjqDtH02c3Drw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-template-literals": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.16.7.tgz",
      "integrity": "sha512-VwbkDDUeenlIjmfNeDX/V0aWrQH2QiVyJtwymVQSzItFDTpxfyJh3EVaQiS0rIN/CqbLGr0VcGmuwyTdZtdIsA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-typeof-symbol": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.16.7.tgz",
      "integrity": "sha512-p2rOixCKRJzpg9JB4gjnG4gjWkWa89ZoYUnl9snJ1cWIcTH/hvxZqfO+WjG6T8DRBpctEol5jw1O5rA8gkCokQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-typescript": {
      "version": "7.16.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.16.8.tgz",
      "integrity": "sha512-bHdQ9k7YpBDO2d0NVfkj51DpQcvwIzIusJ7mEUaMlbZq3Kt/U47j24inXZHQ5MDiYpCs+oZiwnXyKedE8+q7AQ==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/plugin-syntax-typescript": "^7.16.7"
      }
    },
    "@babel/plugin-transform-unicode-escapes": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.16.7.tgz",
      "integrity": "sha512-TAV5IGahIz3yZ9/Hfv35TV2xEm+kaBDaZQCn2S/hG9/CZ0DktxJv9eKfPc7yYCvOYR4JGx1h8C+jcSOvgaaI/Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/plugin-transform-unicode-regex": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.16.7.tgz",
      "integrity": "sha512-oC5tYYKw56HO75KZVLQ+R/Nl3Hro9kf8iG0hXoaHP7tjAyCpvqBiSNe6vGrZni1Z6MggmUOC6A7VP7AVmw225Q==",
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7"
      }
    },
    "@babel/preset-env": {
      "version": "7.16.11",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.16.11.tgz",
      "integrity": "sha512-qcmWG8R7ZW6WBRPZK//y+E3Cli151B20W1Rv7ln27vuPaXU/8TKms6jFdiJtF7UDTxcrb7mZd88tAeK9LjdT8g==",
      "requires": {
        "@babel/compat-data": "^7.16.8",
        "@babel/helper-compilation-targets": "^7.16.7",
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-validator-option": "^7.16.7",
        "@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": "^7.16.7",
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.16.7",
        "@babel/plugin-proposal-async-generator-functions": "^7.16.8",
        "@babel/plugin-proposal-class-properties": "^7.16.7",
        "@babel/plugin-proposal-class-static-block": "^7.16.7",
        "@babel/plugin-proposal-dynamic-import": "^7.16.7",
        "@babel/plugin-proposal-export-namespace-from": "^7.16.7",
        "@babel/plugin-proposal-json-strings": "^7.16.7",
        "@babel/plugin-proposal-logical-assignment-operators": "^7.16.7",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.16.7",
        "@babel/plugin-proposal-numeric-separator": "^7.16.7",
        "@babel/plugin-proposal-object-rest-spread": "^7.16.7",
        "@babel/plugin-proposal-optional-catch-binding": "^7.16.7",
        "@babel/plugin-proposal-optional-chaining": "^7.16.7",
        "@babel/plugin-proposal-private-methods": "^7.16.11",
        "@babel/plugin-proposal-private-property-in-object": "^7.16.7",
        "@babel/plugin-proposal-unicode-property-regex": "^7.16.7",
        "@babel/plugin-syntax-async-generators": "^7.8.4",
        "@babel/plugin-syntax-class-properties": "^7.12.13",
        "@babel/plugin-syntax-class-static-block": "^7.14.5",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.3",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5",
        "@babel/plugin-syntax-top-level-await": "^7.14.5",
        "@babel/plugin-transform-arrow-functions": "^7.16.7",
        "@babel/plugin-transform-async-to-generator": "^7.16.8",
        "@babel/plugin-transform-block-scoped-functions": "^7.16.7",
        "@babel/plugin-transform-block-scoping": "^7.16.7",
        "@babel/plugin-transform-classes": "^7.16.7",
        "@babel/plugin-transform-computed-properties": "^7.16.7",
        "@babel/plugin-transform-destructuring": "^7.16.7",
        "@babel/plugin-transform-dotall-regex": "^7.16.7",
        "@babel/plugin-transform-duplicate-keys": "^7.16.7",
        "@babel/plugin-transform-exponentiation-operator": "^7.16.7",
        "@babel/plugin-transform-for-of": "^7.16.7",
        "@babel/plugin-transform-function-name": "^7.16.7",
        "@babel/plugin-transform-literals": "^7.16.7",
        "@babel/plugin-transform-member-expression-literals": "^7.16.7",
        "@babel/plugin-transform-modules-amd": "^7.16.7",
        "@babel/plugin-transform-modules-commonjs": "^7.16.8",
        "@babel/plugin-transform-modules-systemjs": "^7.16.7",
        "@babel/plugin-transform-modules-umd": "^7.16.7",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.16.8",
        "@babel/plugin-transform-new-target": "^7.16.7",
        "@babel/plugin-transform-object-super": "^7.16.7",
        "@babel/plugin-transform-parameters": "^7.16.7",
        "@babel/plugin-transform-property-literals": "^7.16.7",
        "@babel/plugin-transform-regenerator": "^7.16.7",
        "@babel/plugin-transform-reserved-words": "^7.16.7",
        "@babel/plugin-transform-shorthand-properties": "^7.16.7",
        "@babel/plugin-transform-spread": "^7.16.7",
        "@babel/plugin-transform-sticky-regex": "^7.16.7",
        "@babel/plugin-transform-template-literals": "^7.16.7",
        "@babel/plugin-transform-typeof-symbol": "^7.16.7",
        "@babel/plugin-transform-unicode-escapes": "^7.16.7",
        "@babel/plugin-transform-unicode-regex": "^7.16.7",
        "@babel/preset-modules": "^0.1.5",
        "@babel/types": "^7.16.8",
        "babel-plugin-polyfill-corejs2": "^0.3.0",
        "babel-plugin-polyfill-corejs3": "^0.5.0",
        "babel-plugin-polyfill-regenerator": "^0.3.0",
        "core-js-compat": "^3.20.2",
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "@babel/preset-modules": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.5.tgz",
      "integrity": "sha512-A57th6YRG7oR3cq/yt/Y84MvGgE0eJG2F1JLhKuyG+jFxEgrd/HAMJatiFtmOiZurz+0DkrvbheCLaV5f2JfjA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
        "@babel/plugin-transform-dotall-regex": "^7.4.4",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      }
    },
    "@babel/preset-react": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/preset-react/-/preset-react-7.16.7.tgz",
      "integrity": "sha512-fWpyI8UM/HE6DfPBzD8LnhQ/OcH8AgTaqcqP2nGOXEUV+VKBR5JRN9hCk9ai+zQQ57vtm9oWeXguBCPNUjytgA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-validator-option": "^7.16.7",
        "@babel/plugin-transform-react-display-name": "^7.16.7",
        "@babel/plugin-transform-react-jsx": "^7.16.7",
        "@babel/plugin-transform-react-jsx-development": "^7.16.7",
        "@babel/plugin-transform-react-pure-annotations": "^7.16.7"
      }
    },
    "@babel/preset-typescript": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.16.7.tgz",
      "integrity": "sha512-WbVEmgXdIyvzB77AQjGBEyYPZx+8tTsO50XtfozQrkW8QB2rLJpH2lgx0TRw5EJrBxOZQ+wCcyPVQvS8tjEHpQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.16.7",
        "@babel/helper-validator-option": "^7.16.7",
        "@babel/plugin-transform-typescript": "^7.16.7"
      }
    },
    "@babel/runtime": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.17.0.tgz",
      "integrity": "sha512-etcO/ohMNaNA2UBdaXBBSX/3aEzFMRrVfaPv8Ptc0k+cWpWW0QFiGZ2XnVqQZI1Cf734LbPGmqBKWESfW4x/dQ==",
      "requires": {
        "regenerator-runtime": "^0.13.4"
      }
    },
    "@babel/runtime-corejs3": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/runtime-corejs3/-/runtime-corejs3-7.17.0.tgz",
      "integrity": "sha512-qeydncU80ravKzovVncW3EYaC1ji3GpntdPgNcJy9g7hHSY6KX+ne1cbV3ov7Zzm4F1z0+QreZPCuw1ynkmYNg==",
      "requires": {
        "core-js-pure": "^3.20.2",
        "regenerator-runtime": "^0.13.4"
      }
    },
    "@babel/template": {
      "version": "7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.16.7.tgz",
      "integrity": "sha512-I8j/x8kHUrbYRTUxXrrMbfCa7jxkE7tZre39x3kjr9hvI82cK1FfqLygotcWN5kdPGWcLdWMHpSBavse5tWw3w==",
      "requires": {
        "@babel/code-frame": "^7.16.7",
        "@babel/parser": "^7.16.7",
        "@babel/types": "^7.16.7"
      }
    },
    "@babel/traverse": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.17.0.tgz",
      "integrity": "sha512-fpFIXvqD6kC7c7PUNnZ0Z8cQXlarCLtCUpt2S1Dx7PjoRtCFffvOkHHSom+m5HIxMZn5bIBVb71lhabcmjEsqg==",
      "requires": {
        "@babel/code-frame": "^7.16.7",
        "@babel/generator": "^7.17.0",
        "@babel/helper-environment-visitor": "^7.16.7",
        "@babel/helper-function-name": "^7.16.7",
        "@babel/helper-hoist-variables": "^7.16.7",
        "@babel/helper-split-export-declaration": "^7.16.7",
        "@babel/parser": "^7.17.0",
        "@babel/types": "^7.17.0",
        "debug": "^4.1.0",
        "globals": "^11.1.0"
      }
    },
    "@babel/types": {
      "version": "7.17.0",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.17.0.tgz",
      "integrity": "sha512-TmKSNO4D5rzhL5bjWFcVHHLETzfQ/AmbKpKPOSjlP0WoHZ6L911fgoOKY4Alp/emzG4cHJdyN49zpgkbXFEHHw==",
      "requires": {
        "@babel/helper-validator-identifier": "^7.16.7",
        "to-fast-properties": "^2.0.0"
      }
    },
    "@bcoe/v8-coverage": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz",
      "integrity": "sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw=="
    },
    "@csstools/normalize.css": {
      "version": "12.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/normalize.css/-/normalize.css-12.0.0.tgz",
      "integrity": "sha512-M0qqxAcwCsIVfpFQSlGN5XjXWu8l5JDZN+fPt1LeW5SZexQTgnaEvgXAY+CeygRw0EeppWHi12JxESWiWrB0Sg=="
    },
    "@csstools/postcss-font-format-keywords": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/postcss-font-format-keywords/-/postcss-font-format-keywords-1.0.0.tgz",
      "integrity": "sha512-oO0cZt8do8FdVBX8INftvIA4lUrKUSCcWUf9IwH9IPWOgKT22oAZFXeHLoDK7nhB2SmkNycp5brxfNMRLIhd6Q==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "@csstools/postcss-hwb-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/postcss-hwb-function/-/postcss-hwb-function-1.0.0.tgz",
      "integrity": "sha512-VSTd7hGjmde4rTj1rR30sokY3ONJph1reCBTUXqeW1fKwETPy1x4t/XIeaaqbMbC5Xg4SM/lyXZ2S8NELT2TaA==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "@csstools/postcss-is-pseudo-class": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/postcss-is-pseudo-class/-/postcss-is-pseudo-class-2.0.0.tgz",
      "integrity": "sha512-WnfZlyuh/CW4oS530HBbrKq0G8BKl/bsNr5NMFoubBFzJfvFRGJhplCgIJYWUidLuL3WJ/zhMtDIyNFTqhx63Q==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "@csstools/postcss-normalize-display-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/postcss-normalize-display-values/-/postcss-normalize-display-values-1.0.0.tgz",
      "integrity": "sha512-bX+nx5V8XTJEmGtpWTO6kywdS725t71YSLlxWt78XoHUbELWgoCXeOFymRJmL3SU1TLlKSIi7v52EWqe60vJTQ==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "@eslint/eslintrc": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-1.0.5.tgz",
      "integrity": "sha512-BLxsnmK3KyPunz5wmCCpqy0YelEoxxGmH73Is+Z74oOTMtExcjkr3dDR6quwrjh1YspA8DH9gnX1o069KiS9AQ==",
      "requires": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.2.0",
        "globals": "^13.9.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.0.4",
        "strip-json-comments": "^3.1.1"
      },
      "dependencies": {
        "argparse": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
          "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q=="
        },
        "globals": {
          "version": "13.12.1",
          "resolved": "https://registry.npmjs.org/globals/-/globals-13.12.1.tgz",
          "integrity": "sha512-317dFlgY2pdJZ9rspXDks7073GpDmXdfbM3vYYp0HAMKGDh1FfWPleI2ljVNLQX5M5lXcAslTcPTrOrMEFOjyw==",
          "requires": {
            "type-fest": "^0.20.2"
          }
        },
        "ignore": {
          "version": "4.0.6",
          "resolved": "https://registry.npmjs.org/ignore/-/ignore-4.0.6.tgz",
          "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg=="
        },
        "js-yaml": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
          "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
          "requires": {
            "argparse": "^2.0.1"
          }
        }
      }
    },
    "@humanwhocodes/config-array": {
      "version": "0.9.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.9.3.tgz",
      "integrity": "sha512-3xSMlXHh03hCcCmFc0rbKp3Ivt2PFEJnQUJDDMTJQ2wkECZWdq4GePs2ctc5H8zV+cHPaq8k2vU8mrQjA6iHdQ==",
      "requires": {
        "@humanwhocodes/object-schema": "^1.2.1",
        "debug": "^4.1.1",
        "minimatch": "^3.0.4"
      }
    },
    "@humanwhocodes/object-schema": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-1.2.1.tgz",
      "integrity": "sha512-ZnQMnLV4e7hDlUvw8H+U8ASL02SS2Gn6+9Ac3wGGLIe7+je2AeAOxPY+izIPJDfFDb7eDjev0Us8MO1iFRN8hA=="
    },
    "@istanbuljs/load-nyc-config": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
      "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
      "requires": {
        "camelcase": "^5.3.1",
        "find-up": "^4.1.0",
        "get-package-type": "^0.1.0",
        "js-yaml": "^3.13.1",
        "resolve-from": "^5.0.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "5.3.1",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
          "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
        },
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "requires": {
            "p-limit": "^2.2.0"
          }
        },
        "resolve-from": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
          "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw=="
        }
      }
    },
    "@istanbuljs/schema": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
      "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA=="
    },
    "@jest/console": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/console/-/console-27.5.0.tgz",
      "integrity": "sha512-WUzX5neFb0IOQOy/7A2VhiGdxJKk85Xns2Oq29JaHmtnSel+BsjwyQZxzAs2Xxfd2i452fwdDG9ox/IWi81bdQ==",
      "requires": {
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "jest-message-util": "^27.5.0",
        "jest-util": "^27.5.0",
        "slash": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jest/core": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/core/-/core-27.5.0.tgz",
      "integrity": "sha512-DcUTkZyon+dRozTEjy38Bgt3PIU51GdUJuz3uHKg5maGtmCaYqPUGiM3Xddqi7eIMC7E3fTGIlHqH9i0pTOy6Q==",
      "requires": {
        "@jest/console": "^27.5.0",
        "@jest/reporters": "^27.5.0",
        "@jest/test-result": "^27.5.0",
        "@jest/transform": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "ansi-escapes": "^4.2.1",
        "chalk": "^4.0.0",
        "emittery": "^0.8.1",
        "exit": "^0.1.2",
        "graceful-fs": "^4.2.9",
        "jest-changed-files": "^27.5.0",
        "jest-config": "^27.5.0",
        "jest-haste-map": "^27.5.0",
        "jest-message-util": "^27.5.0",
        "jest-regex-util": "^27.5.0",
        "jest-resolve": "^27.5.0",
        "jest-resolve-dependencies": "^27.5.0",
        "jest-runner": "^27.5.0",
        "jest-runtime": "^27.5.0",
        "jest-snapshot": "^27.5.0",
        "jest-util": "^27.5.0",
        "jest-validate": "^27.5.0",
        "jest-watcher": "^27.5.0",
        "micromatch": "^4.0.4",
        "rimraf": "^3.0.0",
        "slash": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jest/environment": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-27.5.0.tgz",
      "integrity": "sha512-lg0JFsMaLKgpwzs0knOg21Z4OQwaJoBLutnmYzip4tyLTXP21VYWtYGpLXgx42fw/Mw05m1WDXWKgwR6WnsiTw==",
      "requires": {
        "@jest/fake-timers": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "jest-mock": "^27.5.0"
      }
    },
    "@jest/fake-timers": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-27.5.0.tgz",
      "integrity": "sha512-e3WrlpqSHq3HAQ03JFjTn8YCrsyg640/sr1rjkM2rNv8z1ufjudpv4xq6DvvTJYB6FuUrfg0g+7bSKPet5QfCQ==",
      "requires": {
        "@jest/types": "^27.5.0",
        "@sinonjs/fake-timers": "^8.0.1",
        "@types/node": "*",
        "jest-message-util": "^27.5.0",
        "jest-mock": "^27.5.0",
        "jest-util": "^27.5.0"
      }
    },
    "@jest/globals": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/globals/-/globals-27.5.0.tgz",
      "integrity": "sha512-wWpMnTiR65Q4JD7fr2BqN+ZDbi99mmILnEM6u7AaX4geASEIVvQsiB4RCvwZrIX5YZCsAjviJQVq9CYddLABkg==",
      "requires": {
        "@jest/environment": "^27.5.0",
        "@jest/types": "^27.5.0",
        "expect": "^27.5.0"
      }
    },
    "@jest/reporters": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-27.5.0.tgz",
      "integrity": "sha512-DG+BmVSx2uaJSTKz5z1eScgHTQ6/cZ5CCKSpmpr4sXQPwV2V5aUMOBDwXX1MnqNRhH7/Rq9K97ynnocvho5aMA==",
      "requires": {
        "@bcoe/v8-coverage": "^0.2.3",
        "@jest/console": "^27.5.0",
        "@jest/test-result": "^27.5.0",
        "@jest/transform": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "collect-v8-coverage": "^1.0.0",
        "exit": "^0.1.2",
        "glob": "^7.1.2",
        "graceful-fs": "^4.2.9",
        "istanbul-lib-coverage": "^3.0.0",
        "istanbul-lib-instrument": "^5.1.0",
        "istanbul-lib-report": "^3.0.0",
        "istanbul-lib-source-maps": "^4.0.0",
        "istanbul-reports": "^3.1.3",
        "jest-haste-map": "^27.5.0",
        "jest-resolve": "^27.5.0",
        "jest-util": "^27.5.0",
        "jest-worker": "^27.5.0",
        "slash": "^3.0.0",
        "source-map": "^0.6.0",
        "string-length": "^4.0.1",
        "terminal-link": "^2.0.0",
        "v8-to-istanbul": "^8.1.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jest/source-map": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-27.5.0.tgz",
      "integrity": "sha512-0xr7VZ+JNCRrlCyRMYhquUm8eU3kNdGDaIW4s3L625bNjk273v9ZhAm3YczIuzJzYH0pnjT+QSCiZQegWKjeow==",
      "requires": {
        "callsites": "^3.0.0",
        "graceful-fs": "^4.2.9",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "@jest/test-result": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-27.5.0.tgz",
      "integrity": "sha512-Lxecvx5mN6WIeynIyW0dWDQm8UPGMHvTwxUPK+OsZaqBDMGaNDSZtw53VoVk7HyT6AcRblMR/pfa0XucmH4hGw==",
      "requires": {
        "@jest/console": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/istanbul-lib-coverage": "^2.0.0",
        "collect-v8-coverage": "^1.0.0"
      }
    },
    "@jest/test-sequencer": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-27.5.0.tgz",
      "integrity": "sha512-WzjcDflqbpWe+SnJPCvB2gB6haGfrkzAgzY6Pb1aq+EPoVAj2mwBaKN0ROWI4H87aSslCjq2M+BUQFNJ8VpnDA==",
      "requires": {
        "@jest/test-result": "^27.5.0",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^27.5.0",
        "jest-runtime": "^27.5.0"
      }
    },
    "@jest/transform": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-27.5.0.tgz",
      "integrity": "sha512-yXUy/iO3TH1itxJ9BF7LLjuXt8TtgtjAl0PBQbUaCvRa+L0yYBob6uayW9dFRX/CDQweouLhvmXh44zRiaB+yA==",
      "requires": {
        "@babel/core": "^7.1.0",
        "@jest/types": "^27.5.0",
        "babel-plugin-istanbul": "^6.1.1",
        "chalk": "^4.0.0",
        "convert-source-map": "^1.4.0",
        "fast-json-stable-stringify": "^2.0.0",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^27.5.0",
        "jest-regex-util": "^27.5.0",
        "jest-util": "^27.5.0",
        "micromatch": "^4.0.4",
        "pirates": "^4.0.4",
        "slash": "^3.0.0",
        "source-map": "^0.6.1",
        "write-file-atomic": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jest/types": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-27.5.0.tgz",
      "integrity": "sha512-oDHEp7gwSgA82RZ6pzUL3ugM2njP/lVB1MsxRZNOBk+CoNvh9SpH1lQixPFc/kDlV50v59csiW4HLixWmhmgPQ==",
      "requires": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^3.0.0",
        "@types/node": "*",
        "@types/yargs": "^16.0.0",
        "chalk": "^4.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@jridgewell/resolve-uri": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.0.4.tgz",
      "integrity": "sha512-cz8HFjOFfUBtvN+NXYSFMHYRdxZMaEl0XypVrhzxBgadKIXhIkRd8aMeHhmF56Sl7SuS8OnUpQ73/k9LE4VnLg=="
    },
    "@jridgewell/sourcemap-codec": {
      "version": "1.4.10",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.10.tgz",
      "integrity": "sha512-Ht8wIW5v165atIX1p+JvKR5ONzUyF4Ac8DZIQ5kZs9zrb6M8SJNXpx1zn04rn65VjBMygRoMXcyYwNK0fT7bEg=="
    },
    "@jridgewell/trace-mapping": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.2.tgz",
      "integrity": "sha512-9KzzH4kMjA2XmBRHfqG2/Vtl7s92l6uNDd0wW7frDE+EUvQFGqNXhWp0UGJjSkt3v2AYjzOZn1QO9XaTNJIt1Q==",
      "requires": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "requires": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      }
    },
    "@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A=="
    },
    "@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "requires": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      }
    },
    "@pmmmwh/react-refresh-webpack-plugin": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/@pmmmwh/react-refresh-webpack-plugin/-/react-refresh-webpack-plugin-0.5.4.tgz",
      "integrity": "sha512-zZbZeHQDnoTlt2AF+diQT0wsSXpvWiaIOZwBRdltNFhG1+I3ozyaw7U/nBiUwyJ0D+zwdXp0E3bWOl38Ag2BMw==",
      "requires": {
        "ansi-html-community": "^0.0.8",
        "common-path-prefix": "^3.0.0",
        "core-js-pure": "^3.8.1",
        "error-stack-parser": "^2.0.6",
        "find-up": "^5.0.0",
        "html-entities": "^2.1.0",
        "loader-utils": "^2.0.0",
        "schema-utils": "^3.0.0",
        "source-map": "^0.7.3"
      },
      "dependencies": {
        "source-map": {
          "version": "0.7.3",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
          "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="
        }
      }
    },
    "@rollup/plugin-babel": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@rollup/plugin-babel/-/plugin-babel-5.3.0.tgz",
      "integrity": "sha512-9uIC8HZOnVLrLHxayq/PTzw+uS25E14KPUBh5ktF+18Mjo5yK0ToMMx6epY0uEgkjwJw0aBW4x2horYXh8juWw==",
      "requires": {
        "@babel/helper-module-imports": "^7.10.4",
        "@rollup/pluginutils": "^3.1.0"
      }
    },
    "@rollup/plugin-node-resolve": {
      "version": "11.2.1",
      "resolved": "https://registry.npmjs.org/@rollup/plugin-node-resolve/-/plugin-node-resolve-11.2.1.tgz",
      "integrity": "sha512-yc2n43jcqVyGE2sqV5/YCmocy9ArjVAP/BeXyTtADTBBX6V0e5UMqwO8CdQ0kzjb6zu5P1qMzsScCMRvE9OlVg==",
      "requires": {
        "@rollup/pluginutils": "^3.1.0",
        "@types/resolve": "1.17.1",
        "builtin-modules": "^3.1.0",
        "deepmerge": "^4.2.2",
        "is-module": "^1.0.0",
        "resolve": "^1.19.0"
      }
    },
    "@rollup/plugin-replace": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/@rollup/plugin-replace/-/plugin-replace-2.4.2.tgz",
      "integrity": "sha512-IGcu+cydlUMZ5En85jxHH4qj2hta/11BHq95iHEyb2sbgiN0eCdzvUcHw5gt9pBL5lTi4JDYJ1acCoMGpTvEZg==",
      "requires": {
        "@rollup/pluginutils": "^3.1.0",
        "magic-string": "^0.25.7"
      }
    },
    "@rollup/pluginutils": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-3.1.0.tgz",
      "integrity": "sha512-GksZ6pr6TpIjHm8h9lSQ8pi8BE9VeubNT0OMJ3B5uZJ8pz73NPiqOtCog/x2/QzM1ENChPKxMDhiQuRHsqc+lg==",
      "requires": {
        "@types/estree": "0.0.39",
        "estree-walker": "^1.0.1",
        "picomatch": "^2.2.2"
      },
      "dependencies": {
        "@types/estree": {
          "version": "0.0.39",
          "resolved": "https://registry.npmjs.org/@types/estree/-/estree-0.0.39.tgz",
          "integrity": "sha512-EYNwp3bU+98cpU4lAWYYL7Zz+2gryWH1qbdDTidVd6hkiR6weksdbMadyXKXNPEkQFhXM+hVO9ZygomHXp+AIw=="
        }
      }
    },
    "@rushstack/eslint-patch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.1.0.tgz",
      "integrity": "sha512-JLo+Y592QzIE+q7Dl2pMUtt4q8SKYI5jDrZxrozEQxnGVOyYE+GWK9eLkwTaeN9DDctlaRAQ3TBmzZ1qdLE30A=="
    },
    "@sinonjs/commons": {
      "version": "1.8.3",
      "resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-1.8.3.tgz",
      "integrity": "sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==",
      "requires": {
        "type-detect": "4.0.8"
      }
    },
    "@sinonjs/fake-timers": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-8.1.0.tgz",
      "integrity": "sha512-OAPJUAtgeINhh/TAlUID4QTs53Njm7xzddaVlEs/SXwgtiD1tW22zAB/W1wdqfrpmikgaWQ9Fw6Ws+hsiRm5Vg==",
      "requires": {
        "@sinonjs/commons": "^1.7.0"
      }
    },
    "@surma/rollup-plugin-off-main-thread": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/@surma/rollup-plugin-off-main-thread/-/rollup-plugin-off-main-thread-2.2.3.tgz",
      "integrity": "sha512-lR8q/9W7hZpMWweNiAKU7NQerBnzQQLvi8qnTDU/fxItPhtZVMbPV3lbCwjhIlNBe9Bbr5V+KHshvWmVSG9cxQ==",
      "requires": {
        "ejs": "^3.1.6",
        "json5": "^2.2.0",
        "magic-string": "^0.25.0",
        "string.prototype.matchall": "^4.0.6"
      }
    },
    "@svgr/babel-plugin-add-jsx-attribute": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-add-jsx-attribute/-/babel-plugin-add-jsx-attribute-5.4.0.tgz",
      "integrity": "sha512-ZFf2gs/8/6B8PnSofI0inYXr2SDNTDScPXhN7k5EqD4aZ3gi6u+rbmZHVB8IM3wDyx8ntKACZbtXSm7oZGRqVg=="
    },
    "@svgr/babel-plugin-remove-jsx-attribute": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-remove-jsx-attribute/-/babel-plugin-remove-jsx-attribute-5.4.0.tgz",
      "integrity": "sha512-yaS4o2PgUtwLFGTKbsiAy6D0o3ugcUhWK0Z45umJ66EPWunAz9fuFw2gJuje6wqQvQWOTJvIahUwndOXb7QCPg=="
    },
    "@svgr/babel-plugin-remove-jsx-empty-expression": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-remove-jsx-empty-expression/-/babel-plugin-remove-jsx-empty-expression-5.0.1.tgz",
      "integrity": "sha512-LA72+88A11ND/yFIMzyuLRSMJ+tRKeYKeQ+mR3DcAZ5I4h5CPWN9AHyUzJbWSYp/u2u0xhmgOe0+E41+GjEueA=="
    },
    "@svgr/babel-plugin-replace-jsx-attribute-value": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-replace-jsx-attribute-value/-/babel-plugin-replace-jsx-attribute-value-5.0.1.tgz",
      "integrity": "sha512-PoiE6ZD2Eiy5mK+fjHqwGOS+IXX0wq/YDtNyIgOrc6ejFnxN4b13pRpiIPbtPwHEc+NT2KCjteAcq33/F1Y9KQ=="
    },
    "@svgr/babel-plugin-svg-dynamic-title": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-svg-dynamic-title/-/babel-plugin-svg-dynamic-title-5.4.0.tgz",
      "integrity": "sha512-zSOZH8PdZOpuG1ZVx/cLVePB2ibo3WPpqo7gFIjLV9a0QsuQAzJiwwqmuEdTaW2pegyBE17Uu15mOgOcgabQZg=="
    },
    "@svgr/babel-plugin-svg-em-dimensions": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-svg-em-dimensions/-/babel-plugin-svg-em-dimensions-5.4.0.tgz",
      "integrity": "sha512-cPzDbDA5oT/sPXDCUYoVXEmm3VIoAWAPT6mSPTJNbQaBNUuEKVKyGH93oDY4e42PYHRW67N5alJx/eEol20abw=="
    },
    "@svgr/babel-plugin-transform-react-native-svg": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-transform-react-native-svg/-/babel-plugin-transform-react-native-svg-5.4.0.tgz",
      "integrity": "sha512-3eYP/SaopZ41GHwXma7Rmxcv9uRslRDTY1estspeB1w1ueZWd/tPlMfEOoccYpEMZU3jD4OU7YitnXcF5hLW2Q=="
    },
    "@svgr/babel-plugin-transform-svg-component": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-plugin-transform-svg-component/-/babel-plugin-transform-svg-component-5.5.0.tgz",
      "integrity": "sha512-q4jSH1UUvbrsOtlo/tKcgSeiCHRSBdXoIoqX1pgcKK/aU3JD27wmMKwGtpB8qRYUYoyXvfGxUVKchLuR5pB3rQ=="
    },
    "@svgr/babel-preset": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/babel-preset/-/babel-preset-5.5.0.tgz",
      "integrity": "sha512-4FiXBjvQ+z2j7yASeGPEi8VD/5rrGQk4Xrq3EdJmoZgz/tpqChpo5hgXDvmEauwtvOc52q8ghhZK4Oy7qph4ig==",
      "requires": {
        "@svgr/babel-plugin-add-jsx-attribute": "^5.4.0",
        "@svgr/babel-plugin-remove-jsx-attribute": "^5.4.0",
        "@svgr/babel-plugin-remove-jsx-empty-expression": "^5.0.1",
        "@svgr/babel-plugin-replace-jsx-attribute-value": "^5.0.1",
        "@svgr/babel-plugin-svg-dynamic-title": "^5.4.0",
        "@svgr/babel-plugin-svg-em-dimensions": "^5.4.0",
        "@svgr/babel-plugin-transform-react-native-svg": "^5.4.0",
        "@svgr/babel-plugin-transform-svg-component": "^5.5.0"
      }
    },
    "@svgr/core": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/core/-/core-5.5.0.tgz",
      "integrity": "sha512-q52VOcsJPvV3jO1wkPtzTuKlvX7Y3xIcWRpCMtBF3MrteZJtBfQw/+u0B1BHy5ColpQc1/YVTrPEtSYIMNZlrQ==",
      "requires": {
        "@svgr/plugin-jsx": "^5.5.0",
        "camelcase": "^6.2.0",
        "cosmiconfig": "^7.0.0"
      }
    },
    "@svgr/hast-util-to-babel-ast": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/hast-util-to-babel-ast/-/hast-util-to-babel-ast-5.5.0.tgz",
      "integrity": "sha512-cAaR/CAiZRB8GP32N+1jocovUtvlj0+e65TB50/6Lcime+EA49m/8l+P2ko+XPJ4dw3xaPS3jOL4F2X4KWxoeQ==",
      "requires": {
        "@babel/types": "^7.12.6"
      }
    },
    "@svgr/plugin-jsx": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/plugin-jsx/-/plugin-jsx-5.5.0.tgz",
      "integrity": "sha512-V/wVh33j12hGh05IDg8GpIUXbjAPnTdPTKuP4VNLggnwaHMPNQNae2pRnyTAILWCQdz5GyMqtO488g7CKM8CBA==",
      "requires": {
        "@babel/core": "^7.12.3",
        "@svgr/babel-preset": "^5.5.0",
        "@svgr/hast-util-to-babel-ast": "^5.5.0",
        "svg-parser": "^2.0.2"
      }
    },
    "@svgr/plugin-svgo": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/plugin-svgo/-/plugin-svgo-5.5.0.tgz",
      "integrity": "sha512-r5swKk46GuQl4RrVejVwpeeJaydoxkdwkM1mBKOgJLBUJPGaLci6ylg/IjhrRsREKDkr4kbMWdgOtbXEh0fyLQ==",
      "requires": {
        "cosmiconfig": "^7.0.0",
        "deepmerge": "^4.2.2",
        "svgo": "^1.2.2"
      }
    },
    "@svgr/webpack": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/@svgr/webpack/-/webpack-5.5.0.tgz",
      "integrity": "sha512-DOBOK255wfQxguUta2INKkzPj6AIS6iafZYiYmHn6W3pHlycSRRlvWKCfLDG10fXfLWqE3DJHgRUOyJYmARa7g==",
      "requires": {
        "@babel/core": "^7.12.3",
        "@babel/plugin-transform-react-constant-elements": "^7.12.1",
        "@babel/preset-env": "^7.12.1",
        "@babel/preset-react": "^7.12.5",
        "@svgr/core": "^5.5.0",
        "@svgr/plugin-jsx": "^5.5.0",
        "@svgr/plugin-svgo": "^5.5.0",
        "loader-utils": "^2.0.0"
      }
    },
    "@testing-library/dom": {
      "version": "8.11.3",
      "resolved": "https://registry.npmjs.org/@testing-library/dom/-/dom-8.11.3.tgz",
      "integrity": "sha512-9LId28I+lx70wUiZjLvi1DB/WT2zGOxUh46glrSNMaWVx849kKAluezVzZrXJfTKKoQTmEOutLes/bHg4Bj3aA==",
      "requires": {
        "@babel/code-frame": "^7.10.4",
        "@babel/runtime": "^7.12.5",
        "@types/aria-query": "^4.2.0",
        "aria-query": "^5.0.0",
        "chalk": "^4.1.0",
        "dom-accessibility-api": "^0.5.9",
        "lz-string": "^1.4.4",
        "pretty-format": "^27.0.2"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "aria-query": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.0.0.tgz",
          "integrity": "sha512-V+SM7AbUwJ+EBnB8+DXs0hPZHO0W6pqBcc0dW90OwtVG02PswOu/teuARoLQjdDOH+t9pJgGnW5/Qmouf3gPJg=="
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@testing-library/jest-dom": {
      "version": "5.16.2",
      "resolved": "https://registry.npmjs.org/@testing-library/jest-dom/-/jest-dom-5.16.2.tgz",
      "integrity": "sha512-6ewxs1MXWwsBFZXIk4nKKskWANelkdUehchEOokHsN8X7c2eKXGw+77aRV63UU8f/DTSVUPLaGxdrj4lN7D/ug==",
      "requires": {
        "@babel/runtime": "^7.9.2",
        "@types/testing-library__jest-dom": "^5.9.1",
        "aria-query": "^5.0.0",
        "chalk": "^3.0.0",
        "css": "^3.0.0",
        "css.escape": "^1.5.1",
        "dom-accessibility-api": "^0.5.6",
        "lodash": "^4.17.15",
        "redent": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "aria-query": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.0.0.tgz",
          "integrity": "sha512-V+SM7AbUwJ+EBnB8+DXs0hPZHO0W6pqBcc0dW90OwtVG02PswOu/teuARoLQjdDOH+t9pJgGnW5/Qmouf3gPJg=="
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@testing-library/react": {
      "version": "12.1.2",
      "resolved": "https://registry.npmjs.org/@testing-library/react/-/react-12.1.2.tgz",
      "integrity": "sha512-ihQiEOklNyHIpo2Y8FREkyD1QAea054U0MVbwH1m8N9TxeFz+KoJ9LkqoKqJlzx2JDm56DVwaJ1r36JYxZM05g==",
      "requires": {
        "@babel/runtime": "^7.12.5",
        "@testing-library/dom": "^8.0.0"
      }
    },
    "@testing-library/user-event": {
      "version": "13.5.0",
      "resolved": "https://registry.npmjs.org/@testing-library/user-event/-/user-event-13.5.0.tgz",
      "integrity": "sha512-5Kwtbo3Y/NowpkbRuSepbyMFkZmHgD+vPzYB/RJ4oxt5Gj/avFFBYjhw27cqSVPVw/3a67NK1PbiIr9k4Gwmdg==",
      "requires": {
        "@babel/runtime": "^7.12.5"
      }
    },
    "@tootallnate/once": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",
      "integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw=="
    },
    "@trysound/sax": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@trysound/sax/-/sax-0.2.0.tgz",
      "integrity": "sha512-L7z9BgrNEcYyUYtF+HaEfiS5ebkh9jXqbszz7pC0hRBPaatV0XjSD3+eHrpqFemQfgwiFF0QPIarnIihIDn7OA=="
    },
    "@types/aria-query": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@types/aria-query/-/aria-query-4.2.2.tgz",
      "integrity": "sha512-HnYpAE1Y6kRyKM/XkEuiRQhTHvkzMBurTHnpFLYLBGPIylZNPs9jJcuOOYWxPLJCSEtmZT0Y8rHDokKN7rRTig=="
    },
    "@types/babel__core": {
      "version": "7.1.18",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.1.18.tgz",
      "integrity": "sha512-S7unDjm/C7z2A2R9NzfKCK1I+BAALDtxEmsJBwlB3EzNfb929ykjL++1CK9LO++EIp2fQrC8O+BwjKvz6UeDyQ==",
      "requires": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "@types/babel__generator": {
      "version": "7.6.4",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.4.tgz",
      "integrity": "sha512-tFkciB9j2K755yrTALxD44McOrk+gfpIpvC3sxHjRawj6PfnQxrse4Clq5y/Rq+G3mrBurMax/lG8Qn2t9mSsg==",
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@types/babel__template": {
      "version": "7.4.1",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.1.tgz",
      "integrity": "sha512-azBFKemX6kMg5Io+/rdGT0dkGreboUVR0Cdm3fz9QJWpaQGJRQXl7C+6hOTCZcMll7KFyEQpgbYI2lHdsS4U7g==",
      "requires": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@types/babel__traverse": {
      "version": "7.14.2",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.14.2.tgz",
      "integrity": "sha512-K2waXdXBi2302XUdcHcR1jCeU0LL4TD9HRs/gk0N2Xvrht+G/BfJa4QObBQZfhMdxiCpV3COl5Nfq4uKTeTnJA==",
      "requires": {
        "@babel/types": "^7.3.0"
      }
    },
    "@types/body-parser": {
      "version": "1.19.2",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.2.tgz",
      "integrity": "sha512-ALYone6pm6QmwZoAgeyNksccT9Q4AWZQ6PvfwR37GT6r6FWUPguq6sUmNGSMV2Wr761oQoBxwGGa6DR5o1DC9g==",
      "requires": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "@types/bonjour": {
      "version": "3.5.10",
      "resolved": "https://registry.npmjs.org/@types/bonjour/-/bonjour-3.5.10.tgz",
      "integrity": "sha512-p7ienRMiS41Nu2/igbJxxLDWrSZ0WxM8UQgCeO9KhoVF7cOVFkrKsiDr1EsJIla8vV3oEEjGcz11jc5yimhzZw==",
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/connect": {
      "version": "3.4.35",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.35.tgz",
      "integrity": "sha512-cdeYyv4KWoEgpBISTxWvqYsVy444DOqehiF3fM3ne10AmJ62RSyNkUnxMJXHQWRQQX2eR94m5y1IZyDwBjV9FQ==",
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/connect-history-api-fallback": {
      "version": "1.3.5",
      "resolved": "https://registry.npmjs.org/@types/connect-history-api-fallback/-/connect-history-api-fallback-1.3.5.tgz",
      "integrity": "sha512-h8QJa8xSb1WD4fpKBDcATDNGXghFj6/3GRWG6dhmRcu0RX1Ubasur2Uvx5aeEwlf0MwblEC2bMzzMQntxnw/Cw==",
      "requires": {
        "@types/express-serve-static-core": "*",
        "@types/node": "*"
      }
    },
    "@types/eslint": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-7.29.0.tgz",
      "integrity": "sha512-VNcvioYDH8/FxaeTKkM4/TiTwt6pBV9E3OfGmvaw8tPl0rrHCJ4Ll15HRT+pMiFAf/MLQvAzC+6RzUMEL9Ceng==",
      "requires": {
        "@types/estree": "*",
        "@types/json-schema": "*"
      }
    },
    "@types/eslint-scope": {
      "version": "3.7.3",
      "resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.3.tgz",
      "integrity": "sha512-PB3ldyrcnAicT35TWPs5IcwKD8S333HMaa2VVv4+wdvebJkjWuW/xESoB8IwRcog8HYVYamb1g/R31Qv5Bx03g==",
      "requires": {
        "@types/eslint": "*",
        "@types/estree": "*"
      }
    },
    "@types/estree": {
      "version": "0.0.51",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-0.0.51.tgz",
      "integrity": "sha512-CuPgU6f3eT/XgKKPqKd/gLZV1Xmvf1a2R5POBOGQa6uv82xpls89HU5zKeVoyR8XzHd1RGNOlQlvUe3CFkjWNQ=="
    },
    "@types/express": {
      "version": "4.17.13",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.13.tgz",
      "integrity": "sha512-6bSZTPaTIACxn48l50SR+axgrqm6qXFIxrdAKaG6PaJk3+zuUr35hBlgT7vOmJcum+OEaIBLtHV/qloEAFITeA==",
      "requires": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^4.17.18",
        "@types/qs": "*",
        "@types/serve-static": "*"
      }
    },
    "@types/express-serve-static-core": {
      "version": "4.17.28",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.17.28.tgz",
      "integrity": "sha512-P1BJAEAW3E2DJUlkgq4tOL3RyMunoWXqbSCygWo5ZIWTjUgN1YnaXWW4VWl/oc8vs/XoYibEGBKP0uZyF4AHig==",
      "requires": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*"
      }
    },
    "@types/graceful-fs": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.5.tgz",
      "integrity": "sha512-anKkLmZZ+xm4p8JWBf4hElkM4XR+EZeA2M9BAkkTldmcyDY4mbdIJnRghDJH3Ov5ooY7/UAoENtmdMSkaAd7Cw==",
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/html-minifier-terser": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/@types/html-minifier-terser/-/html-minifier-terser-6.1.0.tgz",
      "integrity": "sha512-oh/6byDPnL1zeNXFrDXFLyZjkr1MsBG667IM792caf1L2UPOOMf65NFzjUH/ltyfwjAGfs1rsX1eftK0jC/KIg=="
    },
    "@types/http-proxy": {
      "version": "1.17.8",
      "resolved": "https://registry.npmjs.org/@types/http-proxy/-/http-proxy-1.17.8.tgz",
      "integrity": "sha512-5kPLG5BKpWYkw/LVOGWpiq3nEVqxiN32rTgI53Sk12/xHFQ2rG3ehI9IO+O3W2QoKeyB92dJkoka8SUm6BX1pA==",
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/istanbul-lib-coverage": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.4.tgz",
      "integrity": "sha512-z/QT1XN4K4KYuslS23k62yDIDLwLFkzxOuMplDtObz0+y7VqJCaO2o+SPwHCvLFZh7xazvvoor2tA/hPz9ee7g=="
    },
    "@types/istanbul-lib-report": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
      "integrity": "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==",
      "requires": {
        "@types/istanbul-lib-coverage": "*"
      }
    },
    "@types/istanbul-reports": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.1.tgz",
      "integrity": "sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw==",
      "requires": {
        "@types/istanbul-lib-report": "*"
      }
    },
    "@types/jest": {
      "version": "27.4.0",
      "resolved": "https://registry.npmjs.org/@types/jest/-/jest-27.4.0.tgz",
      "integrity": "sha512-gHl8XuC1RZ8H2j5sHv/JqsaxXkDDM9iDOgu0Wp8sjs4u/snb2PVehyWXJPr+ORA0RPpgw231mnutWI1+0hgjIQ==",
      "requires": {
        "jest-diff": "^27.0.0",
        "pretty-format": "^27.0.0"
      }
    },
    "@types/json-schema": {
      "version": "7.0.9",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.9.tgz",
      "integrity": "sha512-qcUXuemtEu+E5wZSJHNxUXeCZhAfXKQ41D+duX+VYPde7xyEVZci+/oXKJL13tnRs9lR2pr4fod59GT6/X1/yQ=="
    },
    "@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha1-7ihweulOEdK4J7y+UnC86n8+ce4="
    },
    "@types/mime": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@types/mime/-/mime-1.3.2.tgz",
      "integrity": "sha512-YATxVxgRqNH6nHEIsvg6k2Boc1JHI9ZbH5iWFFv/MTkchz3b1ieGDa5T0a9RznNdI0KhVbdbWSN+KWWrQZRxTw=="
    },
    "@types/node": {
      "version": "17.0.16",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-17.0.16.tgz",
      "integrity": "sha512-ydLaGVfQOQ6hI1xK2A5nVh8bl0OGoIfYMxPWHqqYe9bTkWCfqiVvZoh2I/QF2sNSkZzZyROBoTefIEI+PB6iIA=="
    },
    "@types/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA=="
    },
    "@types/prettier": {
      "version": "2.4.3",
      "resolved": "https://registry.npmjs.org/@types/prettier/-/prettier-2.4.3.tgz",
      "integrity": "sha512-QzSuZMBuG5u8HqYz01qtMdg/Jfctlnvj1z/lYnIDXs/golxw0fxtRAHd9KrzjR7Yxz1qVeI00o0kiO3PmVdJ9w=="
    },
    "@types/q": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.5.tgz",
      "integrity": "sha512-L28j2FcJfSZOnL1WBjDYp2vUHCeIFlyYI/53EwD/rKUBQ7MtUUfbQWiyKJGpcnv4/WgrhWsFKrcPstcAt/J0tQ=="
    },
    "@types/qs": {
      "version": "6.9.7",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.7.tgz",
      "integrity": "sha512-FGa1F62FT09qcrueBA6qYTrJPVDzah9a+493+o2PCXsesWHIn27G98TsSMs3WPNbZIEj4+VJf6saSFpvD+3Zsw=="
    },
    "@types/range-parser": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.4.tgz",
      "integrity": "sha512-EEhsLsD6UsDM1yFhAvy0Cjr6VwmpMWqFBCb9w07wVugF7w9nfajxLuVmngTIpgS6svCnm6Vaw+MZhoDCKnOfsw=="
    },
    "@types/resolve": {
      "version": "1.17.1",
      "resolved": "https://registry.npmjs.org/@types/resolve/-/resolve-1.17.1.tgz",
      "integrity": "sha512-yy7HuzQhj0dhGpD8RLXSZWEkLsV9ibvxvi6EiJ3bkqLAO1RGo0WbkWQiwpRlSFymTJRz0d3k5LM3kkx8ArDbLw==",
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/retry": {
      "version": "0.12.1",
      "resolved": "https://registry.npmjs.org/@types/retry/-/retry-0.12.1.tgz",
      "integrity": "sha512-xoDlM2S4ortawSWORYqsdU+2rxdh4LRW9ytc3zmT37RIKQh6IHyKwwtKhKis9ah8ol07DCkZxPt8BBvPjC6v4g=="
    },
    "@types/serve-index": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/@types/serve-index/-/serve-index-1.9.1.tgz",
      "integrity": "sha512-d/Hs3nWDxNL2xAczmOVZNj92YZCS6RGxfBPjKzuu/XirCgXdpKEb88dYNbrYGint6IVWLNP+yonwVAuRC0T2Dg==",
      "requires": {
        "@types/express": "*"
      }
    },
    "@types/serve-static": {
      "version": "1.13.10",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.13.10.tgz",
      "integrity": "sha512-nCkHGI4w7ZgAdNkrEu0bv+4xNV/XDqW+DydknebMOQwkpDGx8G+HTlj7R7ABI8i8nKxVw0wtKPi1D+lPOkh4YQ==",
      "requires": {
        "@types/mime": "^1",
        "@types/node": "*"
      }
    },
    "@types/sockjs": {
      "version": "0.3.33",
      "resolved": "https://registry.npmjs.org/@types/sockjs/-/sockjs-0.3.33.tgz",
      "integrity": "sha512-f0KEEe05NvUnat+boPTZ0dgaLZ4SfSouXUgv5noUiefG2ajgKjmETo9ZJyuqsl7dfl2aHlLJUiki6B4ZYldiiw==",
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/stack-utils": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.1.tgz",
      "integrity": "sha512-Hl219/BT5fLAaz6NDkSuhzasy49dwQS/DSdu4MdggFB8zcXv7vflBI3xp7FEmkmdDkBUI2bPUNeMttp2knYdxw=="
    },
    "@types/testing-library__jest-dom": {
      "version": "5.14.2",
      "resolved": "https://registry.npmjs.org/@types/testing-library__jest-dom/-/testing-library__jest-dom-5.14.2.tgz",
      "integrity": "sha512-vehbtyHUShPxIa9SioxDwCvgxukDMH//icJG90sXQBUm5lJOHLT5kNeU9tnivhnA/TkOFMzGIXN2cTc4hY8/kg==",
      "requires": {
        "@types/jest": "*"
      }
    },
    "@types/trusted-types": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/@types/trusted-types/-/trusted-types-2.0.2.tgz",
      "integrity": "sha512-F5DIZ36YVLE+PN+Zwws4kJogq47hNgX3Nx6WyDJ3kcplxyke3XIzB8uK5n/Lpm1HBsbGzd6nmGehL8cPekP+Tg=="
    },
    "@types/ws": {
      "version": "8.2.2",
      "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.2.2.tgz",
      "integrity": "sha512-NOn5eIcgWLOo6qW8AcuLZ7G8PycXu0xTxxkS6Q18VWFxgPUSOwV0pBj2a/4viNZVu25i7RIB7GttdkAIUUXOOg==",
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/yargs": {
      "version": "16.0.4",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-16.0.4.tgz",
      "integrity": "sha512-T8Yc9wt/5LbJyCaLiHPReJa0kApcIgJ7Bn735GjItUfh08Z1pJvu8QZqb9s+mMvKV6WUQRV7K2R46YbjMXTTJw==",
      "requires": {
        "@types/yargs-parser": "*"
      }
    },
    "@types/yargs-parser": {
      "version": "20.2.1",
      "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-20.2.1.tgz",
      "integrity": "sha512-7tFImggNeNBVMsn0vLrpn1H1uPrUBdnARPTpZoitY37ZrdJREzf7I16tMrlK3hen349gr1NYh8CmZQa7CTG6Aw=="
    },
    "@typescript-eslint/eslint-plugin": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-5.11.0.tgz",
      "integrity": "sha512-HJh33bgzXe6jGRocOj4FmefD7hRY4itgjzOrSs3JPrTNXsX7j5+nQPciAUj/1nZtwo2kAc3C75jZO+T23gzSGw==",
      "requires": {
        "@typescript-eslint/scope-manager": "5.11.0",
        "@typescript-eslint/type-utils": "5.11.0",
        "@typescript-eslint/utils": "5.11.0",
        "debug": "^4.3.2",
        "functional-red-black-tree": "^1.0.1",
        "ignore": "^5.1.8",
        "regexpp": "^3.2.0",
        "semver": "^7.3.5",
        "tsutils": "^3.21.0"
      }
    },
    "@typescript-eslint/experimental-utils": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/experimental-utils/-/experimental-utils-5.11.0.tgz",
      "integrity": "sha512-EPvC/bU2n1LKtzKWP1AjGWkp7r8tJ8giVlZHIODo6q7SAd6J+/9vjtEKHK2G/Qp+D2IGPsQge+oadDR3CZcFtQ==",
      "requires": {
        "@typescript-eslint/utils": "5.11.0"
      }
    },
    "@typescript-eslint/parser": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-5.11.0.tgz",
      "integrity": "sha512-x0DCjetHZYBRovJdr3U0zG9OOdNXUaFLJ82ehr1AlkArljJuwEsgnud+Q7umlGDFLFrs8tU8ybQDFocp/eX8mQ==",
      "requires": {
        "@typescript-eslint/scope-manager": "5.11.0",
        "@typescript-eslint/types": "5.11.0",
        "@typescript-eslint/typescript-estree": "5.11.0",
        "debug": "^4.3.2"
      }
    },
    "@typescript-eslint/scope-manager": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-5.11.0.tgz",
      "integrity": "sha512-z+K4LlahDFVMww20t/0zcA7gq/NgOawaLuxgqGRVKS0PiZlCTIUtX0EJbC0BK1JtR4CelmkPK67zuCgpdlF4EA==",
      "requires": {
        "@typescript-eslint/types": "5.11.0",
        "@typescript-eslint/visitor-keys": "5.11.0"
      }
    },
    "@typescript-eslint/type-utils": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-5.11.0.tgz",
      "integrity": "sha512-wDqdsYO6ofLaD4DsGZ0jGwxp4HrzD2YKulpEZXmgN3xo4BHJwf7kq49JTRpV0Gx6bxkSUmc9s0EIK1xPbFFpIA==",
      "requires": {
        "@typescript-eslint/utils": "5.11.0",
        "debug": "^4.3.2",
        "tsutils": "^3.21.0"
      }
    },
    "@typescript-eslint/types": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-5.11.0.tgz",
      "integrity": "sha512-cxgBFGSRCoBEhvSVLkKw39+kMzUKHlJGVwwMbPcTZX3qEhuXhrjwaZXWMxVfxDgyMm+b5Q5b29Llo2yow8Y7xQ=="
    },
    "@typescript-eslint/typescript-estree": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-5.11.0.tgz",
      "integrity": "sha512-yVH9hKIv3ZN3lw8m/Jy5I4oXO4ZBMqijcXCdA4mY8ull6TPTAoQnKKrcZ0HDXg7Bsl0Unwwx7jcXMuNZc0m4lg==",
      "requires": {
        "@typescript-eslint/types": "5.11.0",
        "@typescript-eslint/visitor-keys": "5.11.0",
        "debug": "^4.3.2",
        "globby": "^11.0.4",
        "is-glob": "^4.0.3",
        "semver": "^7.3.5",
        "tsutils": "^3.21.0"
      }
    },
    "@typescript-eslint/utils": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-5.11.0.tgz",
      "integrity": "sha512-g2I480tFE1iYRDyMhxPAtLQ9HAn0jjBtipgTCZmd9I9s11OV8CTsG+YfFciuNDcHqm4csbAgC2aVZCHzLxMSUw==",
      "requires": {
        "@types/json-schema": "^7.0.9",
        "@typescript-eslint/scope-manager": "5.11.0",
        "@typescript-eslint/types": "5.11.0",
        "@typescript-eslint/typescript-estree": "5.11.0",
        "eslint-scope": "^5.1.1",
        "eslint-utils": "^3.0.0"
      },
      "dependencies": {
        "eslint-scope": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
          "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
          "requires": {
            "esrecurse": "^4.3.0",
            "estraverse": "^4.1.1"
          }
        },
        "estraverse": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
          "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
        }
      }
    },
    "@typescript-eslint/visitor-keys": {
      "version": "5.11.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-5.11.0.tgz",
      "integrity": "sha512-E8w/vJReMGuloGxJDkpPlGwhxocxOpSVgSvjiLO5IxZPmxZF30weOeJYyPSEACwM+X4NziYS9q+WkN/2DHYQwA==",
      "requires": {
        "@typescript-eslint/types": "5.11.0",
        "eslint-visitor-keys": "^3.0.0"
      }
    },
    "@webassemblyjs/ast": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.11.1.tgz",
      "integrity": "sha512-ukBh14qFLjxTQNTXocdyksN5QdM28S1CxHt2rdskFyL+xFV7VremuBLVbmCePj+URalXBENx/9Lm7lnhihtCSw==",
      "requires": {
        "@webassemblyjs/helper-numbers": "1.11.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.1"
      }
    },
    "@webassemblyjs/floating-point-hex-parser": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.1.tgz",
      "integrity": "sha512-iGRfyc5Bq+NnNuX8b5hwBrRjzf0ocrJPI6GWFodBFzmFnyvrQ83SHKhmilCU/8Jv67i4GJZBMhEzltxzcNagtQ=="
    },
    "@webassemblyjs/helper-api-error": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.1.tgz",
      "integrity": "sha512-RlhS8CBCXfRUR/cwo2ho9bkheSXG0+NwooXcc3PAILALf2QLdFyj7KGsKRbVc95hZnhnERon4kW/D3SZpp6Tcg=="
    },
    "@webassemblyjs/helper-buffer": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.11.1.tgz",
      "integrity": "sha512-gwikF65aDNeeXa8JxXa2BAk+REjSyhrNC9ZwdT0f8jc4dQQeDQ7G4m0f2QCLPJiMTTO6wfDmRmj/pW0PsUvIcA=="
    },
    "@webassemblyjs/helper-numbers": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.1.tgz",
      "integrity": "sha512-vDkbxiB8zfnPdNK9Rajcey5C0w+QJugEglN0of+kmO8l7lDb77AnlKYQF7aarZuCrv+l0UvqL+68gSDr3k9LPQ==",
      "requires": {
        "@webassemblyjs/floating-point-hex-parser": "1.11.1",
        "@webassemblyjs/helper-api-error": "1.11.1",
        "@xtuc/long": "4.2.2"
      }
    },
    "@webassemblyjs/helper-wasm-bytecode": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.11.1.tgz",
      "integrity": "sha512-PvpoOGiJwXeTrSf/qfudJhwlvDQxFgelbMqtq52WWiXC6Xgg1IREdngmPN3bs4RoO83PnL/nFrxucXj1+BX62Q=="
    },
    "@webassemblyjs/helper-wasm-section": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.11.1.tgz",
      "integrity": "sha512-10P9No29rYX1j7F3EVPX3JvGPQPae+AomuSTPiF9eBQeChHI6iqjMIwR9JmOJXwpnn/oVGDk7I5IlskuMwU/pg==",
      "requires": {
        "@webassemblyjs/ast": "1.11.1",
        "@webassemblyjs/helper-buffer": "1.11.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.1",
        "@webassemblyjs/wasm-gen": "1.11.1"
      }
    },
    "@webassemblyjs/ieee754": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.1.tgz",
      "integrity": "sha512-hJ87QIPtAMKbFq6CGTkZYJivEwZDbQUgYd3qKSadTNOhVY7p+gfP6Sr0lLRVTaG1JjFj+r3YchoqRYxNH3M0GQ==",
      "requires": {
        "@xtuc/ieee754": "^1.2.0"
      }
    },
    "@webassemblyjs/leb128": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.1.tgz",
      "integrity": "sha512-BJ2P0hNZ0u+Th1YZXJpzW6miwqQUGcIHT1G/sf72gLVD9DZ5AdYTqPNbHZh6K1M5VmKvFXwGSWZADz+qBWxeRw==",
      "requires": {
        "@xtuc/long": "4.2.2"
      }
    },
    "@webassemblyjs/utf8": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.1.tgz",
      "integrity": "sha512-9kqcxAEdMhiwQkHpkNiorZzqpGrodQQ2IGrHHxCy+Ozng0ofyMA0lTqiLkVs1uzTRejX+/O0EOT7KxqVPuXosQ=="
    },
    "@webassemblyjs/wasm-edit": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.11.1.tgz",
      "integrity": "sha512-g+RsupUC1aTHfR8CDgnsVRVZFJqdkFHpsHMfJuWQzWU3tvnLC07UqHICfP+4XyL2tnr1amvl1Sdp06TnYCmVkA==",
      "requires": {
        "@webassemblyjs/ast": "1.11.1",
        "@webassemblyjs/helper-buffer": "1.11.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.1",
        "@webassemblyjs/helper-wasm-section": "1.11.1",
        "@webassemblyjs/wasm-gen": "1.11.1",
        "@webassemblyjs/wasm-opt": "1.11.1",
        "@webassemblyjs/wasm-parser": "1.11.1",
        "@webassemblyjs/wast-printer": "1.11.1"
      }
    },
    "@webassemblyjs/wasm-gen": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.11.1.tgz",
      "integrity": "sha512-F7QqKXwwNlMmsulj6+O7r4mmtAlCWfO/0HdgOxSklZfQcDu0TpLiD1mRt/zF25Bk59FIjEuGAIyn5ei4yMfLhA==",
      "requires": {
        "@webassemblyjs/ast": "1.11.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.1",
        "@webassemblyjs/ieee754": "1.11.1",
        "@webassemblyjs/leb128": "1.11.1",
        "@webassemblyjs/utf8": "1.11.1"
      }
    },
    "@webassemblyjs/wasm-opt": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.11.1.tgz",
      "integrity": "sha512-VqnkNqnZlU5EB64pp1l7hdm3hmQw7Vgqa0KF/KCNO9sIpI6Fk6brDEiX+iCOYrvMuBWDws0NkTOxYEb85XQHHw==",
      "requires": {
        "@webassemblyjs/ast": "1.11.1",
        "@webassemblyjs/helper-buffer": "1.11.1",
        "@webassemblyjs/wasm-gen": "1.11.1",
        "@webassemblyjs/wasm-parser": "1.11.1"
      }
    },
    "@webassemblyjs/wasm-parser": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.11.1.tgz",
      "integrity": "sha512-rrBujw+dJu32gYB7/Lup6UhdkPx9S9SnobZzRVL7VcBH9Bt9bCBLEuX/YXOOtBsOZ4NQrRykKhffRWHvigQvOA==",
      "requires": {
        "@webassemblyjs/ast": "1.11.1",
        "@webassemblyjs/helper-api-error": "1.11.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.11.1",
        "@webassemblyjs/ieee754": "1.11.1",
        "@webassemblyjs/leb128": "1.11.1",
        "@webassemblyjs/utf8": "1.11.1"
      }
    },
    "@webassemblyjs/wast-printer": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.11.1.tgz",
      "integrity": "sha512-IQboUWM4eKzWW+N/jij2sRatKMh99QEelo3Eb2q0qXkvPRISAj8Qxtmw5itwqK+TTkBuUIE45AxYPToqPtL5gg==",
      "requires": {
        "@webassemblyjs/ast": "1.11.1",
        "@xtuc/long": "4.2.2"
      }
    },
    "@xtuc/ieee754": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
      "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA=="
    },
    "@xtuc/long": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
      "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ=="
    },
    "abab": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
      "integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q=="
    },
    "accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "requires": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      }
    },
    "acorn": {
      "version": "8.7.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.7.0.tgz",
      "integrity": "sha512-V/LGr1APy+PXIwKebEWrkZPwoeoF+w1jiOBUmuxuiUIaOHtob8Qc9BTrYo7VuI5fR8tqsy+buA2WFooR5olqvQ=="
    },
    "acorn-globals": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-6.0.0.tgz",
      "integrity": "sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg==",
      "requires": {
        "acorn": "^7.1.1",
        "acorn-walk": "^7.1.1"
      },
      "dependencies": {
        "acorn": {
          "version": "7.4.1",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
          "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A=="
        }
      }
    },
    "acorn-import-assertions": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/acorn-import-assertions/-/acorn-import-assertions-1.8.0.tgz",
      "integrity": "sha512-m7VZ3jwz4eK6A4Vtt8Ew1/mNbP24u0FhdyfA7fSvnJR6LMdfOYnmuIrrJAgrYfYJ10F/otaHTtrtrtmHdMNzEw=="
    },
    "acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ=="
    },
    "acorn-node": {
      "version": "1.8.2",
      "resolved": "https://registry.npmjs.org/acorn-node/-/acorn-node-1.8.2.tgz",
      "integrity": "sha512-8mt+fslDufLYntIoPAaIMUe/lrbrehIiwmR3t2k9LljIzoigEPF27eLk2hy8zSGzmR/ogr7zbRKINMo1u0yh5A==",
      "requires": {
        "acorn": "^7.0.0",
        "acorn-walk": "^7.0.0",
        "xtend": "^4.0.2"
      },
      "dependencies": {
        "acorn": {
          "version": "7.4.1",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
          "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A=="
        }
      }
    },
    "acorn-walk": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-7.2.0.tgz",
      "integrity": "sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA=="
    },
    "address": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/address/-/address-1.1.2.tgz",
      "integrity": "sha512-aT6camzM4xEA54YVJYSqxz1kv4IHnQZRtThJJHhUMRExaU5spC7jX5ugSwTaTgJliIgs4VhZOk7htClvQ/LmRA=="
    },
    "adjust-sourcemap-loader": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/adjust-sourcemap-loader/-/adjust-sourcemap-loader-4.0.0.tgz",
      "integrity": "sha512-OXwN5b9pCUXNQHJpwwD2qP40byEmSgzj8B4ydSN0uMNYWiFmJ6x6KwUllMmfk8Rwu/HJDFR7U8ubsWBoN0Xp0A==",
      "requires": {
        "loader-utils": "^2.0.0",
        "regex-parser": "^2.2.11"
      }
    },
    "agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "requires": {
        "debug": "4"
      }
    },
    "aggregate-error": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
      "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
      "requires": {
        "clean-stack": "^2.0.0",
        "indent-string": "^4.0.0"
      }
    },
    "ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "requires": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      }
    },
    "ajv-formats": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-2.1.1.tgz",
      "integrity": "sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==",
      "requires": {
        "ajv": "^8.0.0"
      },
      "dependencies": {
        "ajv": {
          "version": "8.10.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.10.0.tgz",
          "integrity": "sha512-bzqAEZOjkrUMl2afH8dknrq5KEk2SrwdBROR+vH1EKVQTqaUbJVPdc/gEdggTMM0Se+s+Ja4ju4TlNcStKl2Hw==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        }
      }
    },
    "ajv-keywords": {
      "version": "3.5.2",
      "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
      "integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ=="
    },
    "ansi-escapes": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
      "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
      "requires": {
        "type-fest": "^0.21.3"
      },
      "dependencies": {
        "type-fest": {
          "version": "0.21.3",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
          "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w=="
        }
      }
    },
    "ansi-html-community": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ansi-html-community/-/ansi-html-community-0.0.8.tgz",
      "integrity": "sha512-1APHAyr3+PCamwNw3bXCPp4HFLONZt/yIH0sZp0/469KWNTEy+qN5jQ3GVX6DMZ1UXAi34yVwtTeaG/HpBuuzw=="
    },
    "ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="
    },
    "ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "requires": {
        "color-convert": "^1.9.0"
      }
    },
    "anymatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
      "requires": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      }
    },
    "arg": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.1.tgz",
      "integrity": "sha512-e0hDa9H2Z9AwFkk2qDlwhoMYE4eToKarchkQHovNdLTCYMHZHeRjI71crOh+dio4K6u1IcwubQqo79Ga4CyAQA=="
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "aria-query": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-4.2.2.tgz",
      "integrity": "sha512-o/HelwhuKpTj/frsOsbNLNgnNGVIFsVP/SW2BSF14gVl7kAfMOJ6/8wUAUvG1R1NHKrfG+2sHZTu0yauT1qBrA==",
      "requires": {
        "@babel/runtime": "^7.10.2",
        "@babel/runtime-corejs3": "^7.10.2"
      }
    },
    "array-flatten": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-2.1.2.tgz",
      "integrity": "sha512-hNfzcOV8W4NdualtqBFPyVO+54DSJuZGY9qT4pRroB6S9e3iiido2ISIC5h9R2sPJ8H3FHCIiEnsv1lPXO3KtQ=="
    },
    "array-includes": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.4.tgz",
      "integrity": "sha512-ZTNSQkmWumEbiHO2GF4GmWxYVTiQyJy2XOTa15sdQSrvKn7l+180egQMqlrMOUMCyLMD7pmyQe4mMDUT6Behrw==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1",
        "get-intrinsic": "^1.1.1",
        "is-string": "^1.0.7"
      }
    },
    "array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw=="
    },
    "array.prototype.flat": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.2.5.tgz",
      "integrity": "sha512-KaYU+S+ndVqyUnignHftkwc58o3uVU1jzczILJ1tN2YaIZpFIKBiP/x/j97E5MVPsaCloPbqWLB/8qCTVvT2qg==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.0"
      }
    },
    "array.prototype.flatmap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.2.5.tgz",
      "integrity": "sha512-08u6rVyi1Lj7oqWbS9nUxliETrtIROT4XGTA4D/LWGten6E3ocm7cy9SIrmNHOL5XVbVuckUp3X6Xyg8/zpvHA==",
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.0"
      }
    },
    "asap": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
      "integrity": "sha1-5QNHYR1+aQlDIIu9r+vLwvuGbUY="
    },
    "ast-types-flow": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.7.tgz",
      "integrity": "sha1-9wtzXGvKGlycItmCw+Oef+ujva0="
    },
    "async": {
      "version": "2.6.3",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
      "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
      "requires": {
        "lodash": "^4.17.14"
      }
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k="
    },
    "at-least-node": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
      "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg=="
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg=="
    },
    "autoprefixer": {
      "version": "10.4.2",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.2.tgz",
      "integrity": "sha512-9fOPpHKuDW1w/0EKfRmVnxTDt8166MAnLI3mgZ1JCnhNtYWxcJ6Ud5CO/AVOZi/AvFa8DY9RTy3h3+tFBlrrdQ==",
      "requires": {
        "browserslist": "^4.19.1",
        "caniuse-lite": "^1.0.30001297",
        "fraction.js": "^4.1.2",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.0.0",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "axe-core": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.4.1.tgz",
      "integrity": "sha512-gd1kmb21kwNuWr6BQz8fv6GNECPBnUasepcoLbekws23NVBLODdsClRZ+bQ8+9Uomf3Sm3+Vwn0oYG9NvwnJCw=="
    },
    "axios": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/axios/-/axios-0.25.0.tgz",
      "integrity": "sha512-cD8FOb0tRH3uuEe6+evtAbgJtfxr7ly3fQjYcMcuPlgkwVS9xboaVIpcDV+cYQe+yGykgwZCs1pzjntcGa6l5g==",
      "requires": {
        "follow-redirects": "^1.14.7"
      }
    },
    "axobject-query": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-2.2.0.tgz",
      "integrity": "sha512-Td525n+iPOOyUQIeBfcASuG6uJsDOITl7Mds5gFyerkWiX7qhUTdYUBlSgNMyVqtSJqwpt1kXGLdUt6SykLMRA=="
    },
    "babel-jest": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-27.5.0.tgz",
      "integrity": "sha512-puhCyvBTNLevhbd1oyw6t3gWBicWoUARQYKCBB/B1moif17NbyhxbsfadqZIw8zfJJD+W7Vw0Nb20pEjLxkXqQ==",
      "requires": {
        "@jest/transform": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/babel__core": "^7.1.14",
        "babel-plugin-istanbul": "^6.1.1",
        "babel-preset-jest": "^27.5.0",
        "chalk": "^4.0.0",
        "graceful-fs": "^4.2.9",
        "slash": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "babel-loader": {
      "version": "8.2.3",
      "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.2.3.tgz",
      "integrity": "sha512-n4Zeta8NC3QAsuyiizu0GkmRcQ6clkV9WFUnUf1iXP//IeSKbWjofW3UHyZVwlOB4y039YQKefawyTn64Zwbuw==",
      "requires": {
        "find-cache-dir": "^3.3.1",
        "loader-utils": "^1.4.0",
        "make-dir": "^3.1.0",
        "schema-utils": "^2.6.5"
      },
      "dependencies": {
        "json5": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
          "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
          "requires": {
            "minimist": "^1.2.0"
          }
        },
        "loader-utils": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
          "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
          "requires": {
            "big.js": "^5.2.2",
            "emojis-list": "^3.0.0",
            "json5": "^1.0.1"
          }
        },
        "schema-utils": {
          "version": "2.7.1",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.7.1.tgz",
          "integrity": "sha512-SHiNtMOUGWBQJwzISiVYKu82GiV4QYGePp3odlY1tuKO7gPtphAT5R/py0fA6xtbgLL/RvtJZnU9b8s0F1q0Xg==",
          "requires": {
            "@types/json-schema": "^7.0.5",
            "ajv": "^6.12.4",
            "ajv-keywords": "^3.5.2"
          }
        }
      }
    },
    "babel-plugin-dynamic-import-node": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
      "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
      "requires": {
        "object.assign": "^4.1.0"
      }
    },
    "babel-plugin-istanbul": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.1.1.tgz",
      "integrity": "sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@istanbuljs/load-nyc-config": "^1.0.0",
        "@istanbuljs/schema": "^0.1.2",
        "istanbul-lib-instrument": "^5.0.4",
        "test-exclude": "^6.0.0"
      }
    },
    "babel-plugin-jest-hoist": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-27.5.0.tgz",
      "integrity": "sha512-ztwNkHl+g1GaoQcb8f2BER4C3LMvSXuF7KVqtUioXQgScSEnkl6lLgCILUYIR+CPTwL8H3F/PNLze64HPWF9JA==",
      "requires": {
        "@babel/template": "^7.3.3",
        "@babel/types": "^7.3.3",
        "@types/babel__core": "^7.0.0",
        "@types/babel__traverse": "^7.0.6"
      }
    },
    "babel-plugin-macros": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-macros/-/babel-plugin-macros-3.1.0.tgz",
      "integrity": "sha512-Cg7TFGpIr01vOQNODXOOaGz2NpCU5gl8x1qJFbb6hbZxR7XrcE2vtbAsTAbJ7/xwJtUuJEw8K8Zr/AE0LHlesg==",
      "requires": {
        "@babel/runtime": "^7.12.5",
        "cosmiconfig": "^7.0.0",
        "resolve": "^1.19.0"
      }
    },
    "babel-plugin-named-asset-import": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/babel-plugin-named-asset-import/-/babel-plugin-named-asset-import-0.3.8.tgz",
      "integrity": "sha512-WXiAc++qo7XcJ1ZnTYGtLxmBCVbddAml3CEXgWaBzNzLNoxtQ8AiGEFDMOhot9XjTCQbvP5E77Fj9Gk924f00Q=="
    },
    "babel-plugin-polyfill-corejs2": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.3.1.tgz",
      "integrity": "sha512-v7/T6EQcNfVLfcN2X8Lulb7DjprieyLWJK/zOWH5DUYcAgex9sP3h25Q+DLsX9TloXe3y1O8l2q2Jv9q8UVB9w==",
      "requires": {
        "@babel/compat-data": "^7.13.11",
        "@babel/helper-define-polyfill-provider": "^0.3.1",
        "semver": "^6.1.1"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "babel-plugin-polyfill-corejs3": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.5.2.tgz",
      "integrity": "sha512-G3uJih0XWiID451fpeFaYGVuxHEjzKTHtc9uGFEjR6hHrvNzeS/PX+LLLcetJcytsB5m4j+K3o/EpXJNb/5IEQ==",
      "requires": {
        "@babel/helper-define-polyfill-provider": "^0.3.1",
        "core-js-compat": "^3.21.0"
      }
    },
    "babel-plugin-polyfill-regenerator": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.3.1.tgz",
      "integrity": "sha512-Y2B06tvgHYt1x0yz17jGkGeeMr5FeKUu+ASJ+N6nB5lQ8Dapfg42i0OVrf8PNGJ3zKL4A23snMi1IRwrqqND7A==",
      "requires": {
        "@babel/helper-define-polyfill-provider": "^0.3.1"
      }
    },
    "babel-plugin-transform-react-remove-prop-types": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/babel-plugin-transform-react-remove-prop-types/-/babel-plugin-transform-react-remove-prop-types-0.4.24.tgz",
      "integrity": "sha512-eqj0hVcJUR57/Ug2zE1Yswsw4LhuqqHhD+8v120T1cl3kjg76QwtyBrdIk4WVwK+lAhBJVYCd/v+4nc4y+8JsA=="
    },
    "babel-preset-current-node-syntax": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.0.1.tgz",
      "integrity": "sha512-M7LQ0bxarkxQoN+vz5aJPsLBn77n8QgTFmo8WK0/44auK2xlCXrYcUxHFxgU7qW5Yzw/CjmLRK2uJzaCd7LvqQ==",
      "requires": {
        "@babel/plugin-syntax-async-generators": "^7.8.4",
        "@babel/plugin-syntax-bigint": "^7.8.3",
        "@babel/plugin-syntax-class-properties": "^7.8.3",
        "@babel/plugin-syntax-import-meta": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.3",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.8.3",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
        "@babel/plugin-syntax-numeric-separator": "^7.8.3",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3",
        "@babel/plugin-syntax-top-level-await": "^7.8.3"
      }
    },
    "babel-preset-jest": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-27.5.0.tgz",
      "integrity": "sha512-7bfu1cJBlgK/nKfTvMlElzA3jpi6GzDWX3fntnyP2cQSzoi/KUz6ewGlcb3PSRYZGyv+uPnVHY0Im3JbsViqgA==",
      "requires": {
        "babel-plugin-jest-hoist": "^27.5.0",
        "babel-preset-current-node-syntax": "^1.0.0"
      }
    },
    "babel-preset-react-app": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/babel-preset-react-app/-/babel-preset-react-app-10.0.1.tgz",
      "integrity": "sha512-b0D9IZ1WhhCWkrTXyFuIIgqGzSkRIH5D5AmB0bXbzYAB1OBAwHcUeyWW2LorutLWF5btNo/N7r/cIdmvvKJlYg==",
      "requires": {
        "@babel/core": "^7.16.0",
        "@babel/plugin-proposal-class-properties": "^7.16.0",
        "@babel/plugin-proposal-decorators": "^7.16.4",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.16.0",
        "@babel/plugin-proposal-numeric-separator": "^7.16.0",
        "@babel/plugin-proposal-optional-chaining": "^7.16.0",
        "@babel/plugin-proposal-private-methods": "^7.16.0",
        "@babel/plugin-transform-flow-strip-types": "^7.16.0",
        "@babel/plugin-transform-react-display-name": "^7.16.0",
        "@babel/plugin-transform-runtime": "^7.16.4",
        "@babel/preset-env": "^7.16.4",
        "@babel/preset-react": "^7.16.0",
        "@babel/preset-typescript": "^7.16.0",
        "@babel/runtime": "^7.16.3",
        "babel-plugin-macros": "^3.1.0",
        "babel-plugin-transform-react-remove-prop-types": "^0.4.24"
      }
    },
    "balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "batch": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
      "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY="
    },
    "bfj": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/bfj/-/bfj-7.0.2.tgz",
      "integrity": "sha512-+e/UqUzwmzJamNF50tBV6tZPTORow7gQ96iFow+8b562OdMpEK0BcJEq2OSPEDmAbSMBQ7PKZ87ubFkgxpYWgw==",
      "requires": {
        "bluebird": "^3.5.5",
        "check-types": "^11.1.1",
        "hoopy": "^0.1.4",
        "tryer": "^1.0.1"
      }
    },
    "big.js": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
      "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ=="
    },
    "binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA=="
    },
    "bluebird": {
      "version": "3.7.2",
      "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
      "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg=="
    },
    "body-parser": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.1.tgz",
      "integrity": "sha512-8ljfQi5eBk8EJfECMrgqNGWPEY5jWP+1IzkzkGdFFEwFQZZyaZ21UqdaHktgiMlH0xLHqIFtE/u2OYE5dOtViA==",
      "requires": {
        "bytes": "3.1.1",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.8.1",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.9.6",
        "raw-body": "2.4.2",
        "type-is": "~1.6.18"
      },
      "dependencies": {
        "bytes": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.1.tgz",
          "integrity": "sha512-dWe4nWO/ruEOY7HkUJ5gFt1DCFV9zPRoJr8pV0/ASQermOZjtq8jMjOprC0Kd10GLN+l7xaUPvxzJFWtxGu8Fg=="
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "bonjour": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/bonjour/-/bonjour-3.5.0.tgz",
      "integrity": "sha1-jokKGD2O6aI5OzhExpGkK897yfU=",
      "requires": {
        "array-flatten": "^2.1.0",
        "deep-equal": "^1.0.1",
        "dns-equal": "^1.0.0",
        "dns-txt": "^2.0.2",
        "multicast-dns": "^6.0.1",
        "multicast-dns-service-types": "^1.1.0"
      }
    },
    "boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24="
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "requires": {
        "fill-range": "^7.0.1"
      }
    },
    "browser-process-hrtime": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
      "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow=="
    },
    "browserslist": {
      "version": "4.19.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.19.1.tgz",
      "integrity": "sha512-u2tbbG5PdKRTUoctO3NBD8FQ5HdPh1ZXPHzp1rwaa5jTc+RV9/+RlWiAIKmjRPQF+xbGM9Kklj5bZQFa2s/38A==",
      "requires": {
        "caniuse-lite": "^1.0.30001286",
        "electron-to-chromium": "^1.4.17",
        "escalade": "^3.1.1",
        "node-releases": "^2.0.1",
        "picocolors": "^1.0.0"
      }
    },
    "bser": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
      "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
      "requires": {
        "node-int64": "^0.4.0"
      }
    },
    "buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="
    },
    "buffer-indexof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-indexof/-/buffer-indexof-1.1.1.tgz",
      "integrity": "sha512-4/rOEg86jivtPTeOUUT61jJO1Ya1TrR/OkqCSZDyq84WJh3LuuiphBYJN+fm5xufIk4XAFcEwte/8WzC8If/1g=="
    },
    "builtin-modules": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/builtin-modules/-/builtin-modules-3.2.0.tgz",
      "integrity": "sha512-lGzLKcioL90C7wMczpkY0n/oART3MbBa8R9OFGE1rJxoVI86u4WAGfEk8Wjv10eKSyTHVGkSo3bvBylCEtk7LA=="
    },
    "bytes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
      "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="
    },
    "call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "requires": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      }
    },
    "callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
    },
    "camel-case": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/camel-case/-/camel-case-4.1.2.tgz",
      "integrity": "sha512-gxGWBrTT1JuMx6R+o5PTXMmUnhnVzLQ9SNutD4YqKtI6ap897t3tKECYla6gCWEkplXnlNybEkZg9GEGxKFCgw==",
      "requires": {
        "pascal-case": "^3.1.2",
        "tslib": "^2.0.3"
      },
      "dependencies": {
        "tslib": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
          "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw=="
        }
      }
    },
    "camelcase": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
      "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA=="
    },
    "camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA=="
    },
    "caniuse-api": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/caniuse-api/-/caniuse-api-3.0.0.tgz",
      "integrity": "sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==",
      "requires": {
        "browserslist": "^4.0.0",
        "caniuse-lite": "^1.0.0",
        "lodash.memoize": "^4.1.2",
        "lodash.uniq": "^4.5.0"
      }
    },
    "caniuse-lite": {
      "version": "1.0.30001309",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001309.tgz",
      "integrity": "sha512-Pl8vfigmBXXq+/yUz1jUwULeq9xhMJznzdc/xwl4WclDAuebcTHVefpz8lE/bMI+UN7TOkSSe7B7RnZd6+dzjA=="
    },
    "case-sensitive-paths-webpack-plugin": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/case-sensitive-paths-webpack-plugin/-/case-sensitive-paths-webpack-plugin-2.4.0.tgz",
      "integrity": "sha512-roIFONhcxog0JSSWbvVAh3OocukmSgpqOH6YpMkCvav/ySIV3JKg4Dc8vYtQjYi/UxpNE36r/9v+VqTQqgkYmw=="
    },
    "chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "requires": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      }
    },
    "char-regex": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz",
      "integrity": "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw=="
    },
    "charcodes": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/charcodes/-/charcodes-0.2.0.tgz",
      "integrity": "sha512-Y4kiDb+AM4Ecy58YkuZrrSRJBDQdQ2L+NyS1vHHFtNtUjgutcZfx3yp1dAONI/oPaPmyGfCLx5CxL+zauIMyKQ=="
    },
    "check-types": {
      "version": "11.1.2",
      "resolved": "https://registry.npmjs.org/check-types/-/check-types-11.1.2.tgz",
      "integrity": "sha512-tzWzvgePgLORb9/3a0YenggReLKAIb2owL03H2Xdoe5pKcUyWRSEQ8xfCar8t2SIAuEDwtmx2da1YB52YuHQMQ=="
    },
    "chokidar": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
      "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
      "requires": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "fsevents": "~2.3.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "dependencies": {
        "glob-parent": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
          "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
          "requires": {
            "is-glob": "^4.0.1"
          }
        }
      }
    },
    "chrome-trace-event": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.3.tgz",
      "integrity": "sha512-p3KULyQg4S7NIHixdwbGX+nFHkoBiA4YQmyWtjb8XngSKV124nJmRysgAeujbUVb15vh+RvFUfCPqU7rXk+hZg=="
    },
    "ci-info": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-3.3.0.tgz",
      "integrity": "sha512-riT/3vI5YpVH6/qomlDnJow6TBee2PBKSEpx3O32EGPYbWGIRsIlGRms3Sm74wYE1JMo8RnO04Hb12+v1J5ICw=="
    },
    "cjs-module-lexer": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-1.2.2.tgz",
      "integrity": "sha512-cOU9usZw8/dXIXKtwa8pM0OTJQuJkxMN6w30csNRUerHfeQ5R6U3kkU/FtJeIf3M202OHfY2U8ccInBG7/xogA=="
    },
    "clean-css": {
      "version": "5.2.4",
      "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-5.2.4.tgz",
      "integrity": "sha512-nKseG8wCzEuji/4yrgM/5cthL9oTDc5UOQyFMvW/Q53oP6gLH690o1NbuTh6Y18nujr7BxlsFuS7gXLnLzKJGg==",
      "requires": {
        "source-map": "~0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "clean-stack": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
      "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A=="
    },
    "cliui": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
      "requires": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^7.0.0"
      }
    },
    "co": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
      "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ="
    },
    "coa": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/coa/-/coa-2.0.2.tgz",
      "integrity": "sha512-q5/jG+YQnSy4nRTV4F7lPepBJZ8qBNJJDBuJdoejDyLXgmL7IEo+Le2JDZudFTFt7mrCqIRaSjws4ygRCTCAXA==",
      "requires": {
        "@types/q": "^1.5.1",
        "chalk": "^2.4.1",
        "q": "^1.1.2"
      }
    },
    "collect-v8-coverage": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.1.tgz",
      "integrity": "sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg=="
    },
    "color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "requires": {
        "color-name": "1.1.3"
      }
    },
    "color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
    },
    "colord": {
      "version": "2.9.2",
      "resolved": "https://registry.npmjs.org/colord/-/colord-2.9.2.tgz",
      "integrity": "sha512-Uqbg+J445nc1TKn4FoDPS6ZZqAvEDnwrH42yo8B40JSOgSLxMZ/gt3h4nmCtPLQeXhjJJkqBx7SCY35WnIixaQ=="
    },
    "colorette": {
      "version": "2.0.16",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.16.tgz",
      "integrity": "sha512-hUewv7oMjCp+wkBv5Rm0v87eJhq4woh5rSR+42YSQJKecCqgIqNkZ6lAlQms/BwHPJA5NKMRlpxPRv0n8HQW6g=="
    },
    "combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "requires": {
        "delayed-stream": "~1.0.0"
      }
    },
    "commander": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
      "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw=="
    },
    "common-path-prefix": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/common-path-prefix/-/common-path-prefix-3.0.0.tgz",
      "integrity": "sha512-QE33hToZseCH3jS0qN96O/bSh3kaw/h+Tq7ngyY9eWDUnTlTNUyqfqvCXioLe5Na5jFsL78ra/wuBU4iuEgd4w=="
    },
    "common-tags": {
      "version": "1.8.2",
      "resolved": "https://registry.npmjs.org/common-tags/-/common-tags-1.8.2.tgz",
      "integrity": "sha512-gk/Z852D2Wtb//0I+kRFNKKE9dIIVirjoqPoA1wJU+XePVXZfGeBpk45+A1rKO4Q43prqWBNY/MiIeRLbPWUaA=="
    },
    "commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs="
    },
    "compressible": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
      "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
      "requires": {
        "mime-db": ">= 1.43.0 < 2"
      }
    },
    "compression": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "requires": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "confusing-browser-globals": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/confusing-browser-globals/-/confusing-browser-globals-1.0.11.tgz",
      "integrity": "sha512-JsPKdmh8ZkmnHxDk55FZ1TqVLvEQTvoByJZRN9jzI0UjxK/QgAmsphz7PGtqgPieQZ/CQcHWXCR7ATDNhGe+YA=="
    },
    "connect-history-api-fallback": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",
      "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg=="
    },
    "content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "requires": {
        "safe-buffer": "5.2.1"
      },
      "dependencies": {
        "safe-buffer": {
          "version": "5.2.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
          "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
        }
      }
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
    },
    "convert-source-map": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz",
      "integrity": "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==",
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "cookie": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.1.tgz",
      "integrity": "sha512-ZwrFkGJxUR3EIoXtO+yVE69Eb7KlixbaeAWfBQB9vVsNn/o+Yw69gBWSSDK825hQNdN+wF8zELf3dFNl/kxkUA=="
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
    },
    "core-js": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.21.0.tgz",
      "integrity": "sha512-YUdI3fFu4TF/2WykQ2xzSiTQdldLB4KVuL9WeAy5XONZYt5Cun/fpQvctoKbCgvPhmzADeesTk/j2Rdx77AcKQ=="
    },
    "core-js-compat": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.21.0.tgz",
      "integrity": "sha512-OSXseNPSK2OPJa6GdtkMz/XxeXx8/CJvfhQWTqd6neuUraujcL4jVsjkLQz1OWnax8xVQJnRPe0V2jqNWORA+A==",
      "requires": {
        "browserslist": "^4.19.1",
        "semver": "7.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
          "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A=="
        }
      }
    },
    "core-js-pure": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/core-js-pure/-/core-js-pure-3.21.0.tgz",
      "integrity": "sha512-VaJUunCZLnxuDbo1rNOzwbet9E1K9joiXS5+DQMPtgxd24wfsZbJZMMfQLGYMlCUvSxLfsRUUhoOR2x28mFfeg=="
    },
    "core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="
    },
    "cosmiconfig": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
      "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
      "requires": {
        "@types/parse-json": "^4.0.0",
        "import-fresh": "^3.2.1",
        "parse-json": "^5.0.0",
        "path-type": "^4.0.0",
        "yaml": "^1.10.0"
      }
    },
    "cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "requires": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      }
    },
    "crypto-random-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
      "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA=="
    },
    "css": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/css/-/css-3.0.0.tgz",
      "integrity": "sha512-DG9pFfwOrzc+hawpmqX/dHYHJG+Bsdb0klhyi1sDneOgGOXy9wQIC8hzyVp1e4NRYDBdxcylvywPkkXCHAzTyQ==",
      "requires": {
        "inherits": "^2.0.4",
        "source-map": "^0.6.1",
        "source-map-resolve": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "css-blank-pseudo": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/css-blank-pseudo/-/css-blank-pseudo-3.0.3.tgz",
      "integrity": "sha512-VS90XWtsHGqoM0t4KpH053c4ehxZ2E6HtGI7x68YFV0pTo/QmkV/YFA+NnlvK8guxZVNWGQhVNJGC39Q8XF4OQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "css-declaration-sorter": {
      "version": "6.1.4",
      "resolved": "https://registry.npmjs.org/css-declaration-sorter/-/css-declaration-sorter-6.1.4.tgz",
      "integrity": "sha512-lpfkqS0fctcmZotJGhnxkIyJWvBXgpyi2wsFd4J8VB7wzyrT6Ch/3Q+FMNJpjK4gu1+GN5khOnpU2ZVKrLbhCw==",
      "requires": {
        "timsort": "^0.3.0"
      }
    },
    "css-has-pseudo": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/css-has-pseudo/-/css-has-pseudo-3.0.4.tgz",
      "integrity": "sha512-Vse0xpR1K9MNlp2j5w1pgWIJtm1a8qS0JwS9goFYcImjlHEmywP9VUF05aGBXzGpDJF86QXk4L0ypBmwPhGArw==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "css-loader": {
      "version": "6.6.0",
      "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-6.6.0.tgz",
      "integrity": "sha512-FK7H2lisOixPT406s5gZM1S3l8GrfhEBT3ZiL2UX1Ng1XWs0y2GPllz/OTyvbaHe12VgQrIXIzuEGVlbUhodqg==",
      "requires": {
        "icss-utils": "^5.1.0",
        "postcss": "^8.4.5",
        "postcss-modules-extract-imports": "^3.0.0",
        "postcss-modules-local-by-default": "^4.0.0",
        "postcss-modules-scope": "^3.0.0",
        "postcss-modules-values": "^4.0.0",
        "postcss-value-parser": "^4.2.0",
        "semver": "^7.3.5"
      }
    },
    "css-minimizer-webpack-plugin": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/css-minimizer-webpack-plugin/-/css-minimizer-webpack-plugin-3.4.1.tgz",
      "integrity": "sha512-1u6D71zeIfgngN2XNRJefc/hY7Ybsxd74Jm4qngIXyUEk7fss3VUzuHxLAq/R8NAba4QU9OUSaMZlbpRc7bM4Q==",
      "requires": {
        "cssnano": "^5.0.6",
        "jest-worker": "^27.0.2",
        "postcss": "^8.3.5",
        "schema-utils": "^4.0.0",
        "serialize-javascript": "^6.0.0",
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "ajv": {
          "version": "8.10.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.10.0.tgz",
          "integrity": "sha512-bzqAEZOjkrUMl2afH8dknrq5KEk2SrwdBROR+vH1EKVQTqaUbJVPdc/gEdggTMM0Se+s+Ja4ju4TlNcStKl2Hw==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "ajv-keywords": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
          "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
          "requires": {
            "fast-deep-equal": "^3.1.3"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "schema-utils": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
          "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
          "requires": {
            "@types/json-schema": "^7.0.9",
            "ajv": "^8.8.0",
            "ajv-formats": "^2.1.1",
            "ajv-keywords": "^5.0.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "css-prefers-color-scheme": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/css-prefers-color-scheme/-/css-prefers-color-scheme-6.0.3.tgz",
      "integrity": "sha512-4BqMbZksRkJQx2zAjrokiGMd07RqOa2IxIrrN10lyBe9xhn9DEvjUK79J6jkeiv9D9hQFXKb6g1jwU62jziJZA=="
    },
    "css-select": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-2.1.0.tgz",
      "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
      "requires": {
        "boolbase": "^1.0.0",
        "css-what": "^3.2.1",
        "domutils": "^1.7.0",
        "nth-check": "^1.0.2"
      }
    },
    "css-select-base-adapter": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/css-select-base-adapter/-/css-select-base-adapter-0.1.1.tgz",
      "integrity": "sha512-jQVeeRG70QI08vSTwf1jHxp74JoZsr2XSgETae8/xC8ovSnL2WF87GTLO86Sbwdt2lK4Umg4HnnwMO4YF3Ce7w=="
    },
    "css-tree": {
      "version": "1.0.0-alpha.37",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.0.0-alpha.37.tgz",
      "integrity": "sha512-DMxWJg0rnz7UgxKT0Q1HU/L9BeJI0M6ksor0OgqOnF+aRCDWg/N2641HmVyU9KVIu0OVVWOb2IpC9A+BJRnejg==",
      "requires": {
        "mdn-data": "2.0.4",
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "css-what": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-3.4.2.tgz",
      "integrity": "sha512-ACUm3L0/jiZTqfzRM3Hi9Q8eZqd6IK37mMWPLz9PJxkLWllYeRf+EHUSHYEtFop2Eqytaq1FizFVh7XfBnXCDQ=="
    },
    "css.escape": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/css.escape/-/css.escape-1.5.1.tgz",
      "integrity": "sha1-QuJ9T6BK4y+TGktNQZH6nN3ul8s="
    },
    "cssdb": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/cssdb/-/cssdb-6.2.0.tgz",
      "integrity": "sha512-OP1owHiK7IkCPSmNvWGMOEbfMcPZ8HA1TkzUXzB2SA708Y4pFGXWtLAVxds2QJI/0FA3mCNwRkEA9B4U4fW2Dw=="
    },
    "cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg=="
    },
    "cssnano": {
      "version": "5.0.17",
      "resolved": "https://registry.npmjs.org/cssnano/-/cssnano-5.0.17.tgz",
      "integrity": "sha512-fmjLP7k8kL18xSspeXTzRhaFtRI7DL9b8IcXR80JgtnWBpvAzHT7sCR/6qdn0tnxIaINUN6OEQu83wF57Gs3Xw==",
      "requires": {
        "cssnano-preset-default": "^5.1.12",
        "lilconfig": "^2.0.3",
        "yaml": "^1.10.2"
      }
    },
    "cssnano-preset-default": {
      "version": "5.1.12",
      "resolved": "https://registry.npmjs.org/cssnano-preset-default/-/cssnano-preset-default-5.1.12.tgz",
      "integrity": "sha512-rO/JZYyjW1QNkWBxMGV28DW7d98UDLaF759frhli58QFehZ+D/LSmwQ2z/ylBAe2hUlsIWTq6NYGfQPq65EF9w==",
      "requires": {
        "css-declaration-sorter": "^6.0.3",
        "cssnano-utils": "^3.0.2",
        "postcss-calc": "^8.2.0",
        "postcss-colormin": "^5.2.5",
        "postcss-convert-values": "^5.0.4",
        "postcss-discard-comments": "^5.0.3",
        "postcss-discard-duplicates": "^5.0.3",
        "postcss-discard-empty": "^5.0.3",
        "postcss-discard-overridden": "^5.0.4",
        "postcss-merge-longhand": "^5.0.6",
        "postcss-merge-rules": "^5.0.6",
        "postcss-minify-font-values": "^5.0.4",
        "postcss-minify-gradients": "^5.0.6",
        "postcss-minify-params": "^5.0.5",
        "postcss-minify-selectors": "^5.1.3",
        "postcss-normalize-charset": "^5.0.3",
        "postcss-normalize-display-values": "^5.0.3",
        "postcss-normalize-positions": "^5.0.4",
        "postcss-normalize-repeat-style": "^5.0.4",
        "postcss-normalize-string": "^5.0.4",
        "postcss-normalize-timing-functions": "^5.0.3",
        "postcss-normalize-unicode": "^5.0.4",
        "postcss-normalize-url": "^5.0.5",
        "postcss-normalize-whitespace": "^5.0.4",
        "postcss-ordered-values": "^5.0.5",
        "postcss-reduce-initial": "^5.0.3",
        "postcss-reduce-transforms": "^5.0.4",
        "postcss-svgo": "^5.0.4",
        "postcss-unique-selectors": "^5.0.4"
      }
    },
    "cssnano-utils": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/cssnano-utils/-/cssnano-utils-3.0.2.tgz",
      "integrity": "sha512-KhprijuQv2sP4kT92sSQwhlK3SJTbDIsxcfIEySB0O+3m9esFOai7dP9bMx5enHAh2MwarVIcnwiWoOm01RIbQ=="
    },
    "csso": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/csso/-/csso-4.2.0.tgz",
      "integrity": "sha512-wvlcdIbf6pwKEk7vHj8/Bkc0B4ylXZruLvOgs9doS5eOsOpuodOV2zJChSpkp+pRpYQLQMeF04nr3Z68Sta9jA==",
      "requires": {
        "css-tree": "^1.1.2"
      },
      "dependencies": {
        "css-tree": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.1.3.tgz",
          "integrity": "sha512-tRpdppF7TRazZrjJ6v3stzv93qxRcSsFmW6cX0Zm2NVKpxE1WV1HblnghVv9TreireHkqI/VDEsfolRF1p6y7Q==",
          "requires": {
            "mdn-data": "2.0.14",
            "source-map": "^0.6.1"
          }
        },
        "mdn-data": {
          "version": "2.0.14",
          "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.14.tgz",
          "integrity": "sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "cssom": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.4.4.tgz",
      "integrity": "sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw=="
    },
    "cssstyle": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-2.3.0.tgz",
      "integrity": "sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A==",
      "requires": {
        "cssom": "~0.3.6"
      },
      "dependencies": {
        "cssom": {
          "version": "0.3.8",
          "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
          "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg=="
        }
      }
    },
    "damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA=="
    },
    "data-urls": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-2.0.0.tgz",
      "integrity": "sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ==",
      "requires": {
        "abab": "^2.0.3",
        "whatwg-mimetype": "^2.3.0",
        "whatwg-url": "^8.0.0"
      }
    },
    "debug": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.3.tgz",
      "integrity": "sha512-/zxw5+vh1Tfv+4Qn7a5nsbcJKPaSvCDhojn6FEl9vupwK2VCSDtEiEtqr8DFtzYFOdz63LBkxec7DYuc2jon6Q==",
      "requires": {
        "ms": "2.1.2"
      }
    },
    "decimal.js": {
      "version": "10.3.1",
      "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.3.1.tgz",
      "integrity": "sha512-V0pfhfr8suzyPGOx3nmq4aHqabehUZn6Ch9kyFpV79TGDTWFmHqUqXdabR7QHqxzrYolF4+tVmJhUG4OURg5dQ=="
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
    },
    "dedent": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/dedent/-/dedent-0.7.0.tgz",
      "integrity": "sha1-JJXduvbrh0q7Dhvp3yLS5aVEMmw="
    },
    "deep-equal": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
      "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
      "requires": {
        "is-arguments": "^1.0.4",
        "is-date-object": "^1.0.1",
        "is-regex": "^1.0.4",
        "object-is": "^1.0.1",
        "object-keys": "^1.1.1",
        "regexp.prototype.flags": "^1.2.0"
      }
    },
    "deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ=="
    },
    "deepmerge": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
      "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg=="
    },
    "default-gateway": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-6.0.3.tgz",
      "integrity": "sha512-fwSOJsbbNzZ/CUFpqFBqYfYNLj1NbMPm8MMCIzHjC83iSJRBEGmDUxU+WP661BaBQImeC2yHwXtz+P/O9o+XEg==",
      "requires": {
        "execa": "^5.0.0"
      }
    },
    "define-lazy-prop": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-2.0.0.tgz",
      "integrity": "sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og=="
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "defined": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/defined/-/defined-1.0.0.tgz",
      "integrity": "sha1-yY2bzvdWdBiOEQlpFRGZ45sfppM="
    },
    "del": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/del/-/del-6.0.0.tgz",
      "integrity": "sha512-1shh9DQ23L16oXSZKB2JxpL7iMy2E0S9d517ptA1P8iw0alkPtQcrKH7ru31rYtKwF499HkTu+DRzq3TCKDFRQ==",
      "requires": {
        "globby": "^11.0.1",
        "graceful-fs": "^4.2.4",
        "is-glob": "^4.0.1",
        "is-path-cwd": "^2.2.0",
        "is-path-inside": "^3.0.2",
        "p-map": "^4.0.0",
        "rimraf": "^3.0.2",
        "slash": "^3.0.0"
      }
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "detect-newline": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz",
      "integrity": "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA=="
    },
    "detect-node": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.1.0.tgz",
      "integrity": "sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g=="
    },
    "detect-port-alt": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/detect-port-alt/-/detect-port-alt-1.1.6.tgz",
      "integrity": "sha512-5tQykt+LqfJFBEYaDITx7S7cR7mJ/zQmLXZ2qt5w04ainYZw6tBf9dBunMjVeVOdYVRUzUOE4HkY5J7+uttb5Q==",
      "requires": {
        "address": "^1.0.1",
        "debug": "^2.6.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "detective": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/detective/-/detective-5.2.0.tgz",
      "integrity": "sha512-6SsIx+nUUbuK0EthKjv0zrdnajCCXVYGmbYYiYjFVpzcjwEs/JMDZ8tPRG29J/HhN56t3GJp2cGSWDRjjot8Pg==",
      "requires": {
        "acorn-node": "^1.6.1",
        "defined": "^1.0.0",
        "minimist": "^1.1.1"
      }
    },
    "didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw=="
    },
    "diff-sequences": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-27.5.0.tgz",
      "integrity": "sha512-ZsOBWnhXiH+Zn0DcBNX/tiQsqrREHs/6oQsEVy2VJJjrTblykPima11pyHMSA/7PGmD+fwclTnKVKL/qtNREDQ=="
    },
    "dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "requires": {
        "path-type": "^4.0.0"
      }
    },
    "dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA=="
    },
    "dns-equal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/dns-equal/-/dns-equal-1.0.0.tgz",
      "integrity": "sha1-s55/HabrCnW6nBcySzR1PEfgZU0="
    },
    "dns-packet": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-1.3.4.tgz",
      "integrity": "sha512-BQ6F4vycLXBvdrJZ6S3gZewt6rcrks9KBgM9vrhW+knGRqc8uEdT7fuCwloc7nny5xNoMJ17HGH0R/6fpo8ECA==",
      "requires": {
        "ip": "^1.1.0",
        "safe-buffer": "^5.0.1"
      }
    },
    "dns-txt": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/dns-txt/-/dns-txt-2.0.2.tgz",
      "integrity": "sha1-uR2Ab10nGI5Ks+fRB9iBocxGQrY=",
      "requires": {
        "buffer-indexof": "^1.0.0"
      }
    },
    "doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "requires": {
        "esutils": "^2.0.2"
      }
    },
    "dom-accessibility-api": {
      "version": "0.5.11",
      "resolved": "https://registry.npmjs.org/dom-accessibility-api/-/dom-accessibility-api-0.5.11.tgz",
      "integrity": "sha512-7X6GvzjYf4yTdRKuCVScV+aA9Fvh5r8WzWrXBH9w82ZWB/eYDMGCnazoC/YAqAzUJWHzLOnZqr46K3iEyUhUvw=="
    },
    "dom-converter": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/dom-converter/-/dom-converter-0.2.0.tgz",
      "integrity": "sha512-gd3ypIPfOMr9h5jIKq8E3sHOTCjeirnl0WK5ZdS1AW0Odt0b1PaWaHdJ4Qk4klv+YB9aJBS7mESXjFoDQPu6DA==",
      "requires": {
        "utila": "~0.4"
      }
    },
    "dom-serializer": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
      "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
      "requires": {
        "domelementtype": "^2.0.1",
        "entities": "^2.0.0"
      },
      "dependencies": {
        "domelementtype": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.2.0.tgz",
          "integrity": "sha512-DtBMo82pv1dFtUmHyr48beiuq792Sxohr+8Hm9zoxklYPfa6n0Z3Byjj2IV7bmr2IyqClnqEQhfgHJJ5QF0R5A=="
        }
      }
    },
    "domelementtype": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
      "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w=="
    },
    "domexception": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/domexception/-/domexception-2.0.1.tgz",
      "integrity": "sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg==",
      "requires": {
        "webidl-conversions": "^5.0.0"
      },
      "dependencies": {
        "webidl-conversions": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-5.0.0.tgz",
          "integrity": "sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA=="
        }
      }
    },
    "domhandler": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-4.3.0.tgz",
      "integrity": "sha512-fC0aXNQXqKSFTr2wDNZDhsEYjCiYsDWl3D01kwt25hm1YIPyDGHvvi3rw+PLqHAl/m71MaiF7d5zvBr0p5UB2g==",
      "requires": {
        "domelementtype": "^2.2.0"
      },
      "dependencies": {
        "domelementtype": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.2.0.tgz",
          "integrity": "sha512-DtBMo82pv1dFtUmHyr48beiuq792Sxohr+8Hm9zoxklYPfa6n0Z3Byjj2IV7bmr2IyqClnqEQhfgHJJ5QF0R5A=="
        }
      }
    },
    "domutils": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
      "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
      "requires": {
        "dom-serializer": "0",
        "domelementtype": "1"
      }
    },
    "dot-case": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/dot-case/-/dot-case-3.0.4.tgz",
      "integrity": "sha512-Kv5nKlh6yRrdrGvxeJ2e5y2eRUpkUosIW4A2AS38zwSz27zu7ufDwQPi5Jhs3XAlGNetl3bmnGhQsMtkKJnj3w==",
      "requires": {
        "no-case": "^3.0.4",
        "tslib": "^2.0.3"
      },
      "dependencies": {
        "tslib": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
          "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw=="
        }
      }
    },
    "dotenv": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-10.0.0.tgz",
      "integrity": "sha512-rlBi9d8jpv9Sf1klPjNfFAuWDjKLwTIJJ/VxtoTwIR6hnZxcEOQCZg2oIL3MWBYw5GpUDKOEnND7LXTbIpQ03Q=="
    },
    "dotenv-expand": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/dotenv-expand/-/dotenv-expand-5.1.0.tgz",
      "integrity": "sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA=="
    },
    "duplexer": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.2.tgz",
      "integrity": "sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg=="
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "ejs": {
      "version": "3.1.6",
      "resolved": "https://registry.npmjs.org/ejs/-/ejs-3.1.6.tgz",
      "integrity": "sha512-9lt9Zse4hPucPkoP7FHDF0LQAlGyF9JVpnClFLFH3aSSbxmyoqINRpp/9wePWJTUl4KOQwRL72Iw3InHPDkoGw==",
      "requires": {
        "jake": "^10.6.1"
      }
    },
    "electron-to-chromium": {
      "version": "1.4.66",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.66.tgz",
      "integrity": "sha512-f1RXFMsvwufWLwYUxTiP7HmjprKXrqEWHiQkjAYa9DJeVIlZk5v8gBGcaV+FhtXLly6C1OTVzQY+2UQrACiLlg=="
    },
    "emittery": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.8.1.tgz",
      "integrity": "sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg=="
    },
    "emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg=="
    },
    "emojis-list": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
      "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q=="
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
    },
    "enhanced-resolve": {
      "version": "5.8.3",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.8.3.tgz",
      "integrity": "sha512-EGAbGvH7j7Xt2nc0E7D99La1OiEs8LnyimkRgwExpUMScN6O+3x9tIWs7PLQZVNx4YD+00skHXPXi1yQHpAmZA==",
      "requires": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      }
    },
    "entities": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-2.2.0.tgz",
      "integrity": "sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A=="
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "error-stack-parser": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/error-stack-parser/-/error-stack-parser-2.0.6.tgz",
      "integrity": "sha512-d51brTeqC+BHlwF0BhPtcYgF5nlzf9ZZ0ZIUQNZpc9ZB9qw5IJ2diTrBY9jlCJkTLITYPjmiX6OWCwH+fuyNgQ==",
      "requires": {
        "stackframe": "^1.1.1"
      }
    },
    "es-abstract": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.19.1.tgz",
      "integrity": "sha512-2vJ6tjA/UfqLm2MPs7jxVybLoB8i1t1Jd9R3kISld20sIxPcTbLuggQOUxeWeAvIUkduv/CfMjuh4WmiXr2v9w==",
      "requires": {
        "call-bind": "^1.0.2",
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.1.1",
        "get-symbol-description": "^1.0.0",
        "has": "^1.0.3",
        "has-symbols": "^1.0.2",
        "internal-slot": "^1.0.3",
        "is-callable": "^1.2.4",
        "is-negative-zero": "^2.0.1",
        "is-regex": "^1.1.4",
        "is-shared-array-buffer": "^1.0.1",
        "is-string": "^1.0.7",
        "is-weakref": "^1.0.1",
        "object-inspect": "^1.11.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.2",
        "string.prototype.trimend": "^1.0.4",
        "string.prototype.trimstart": "^1.0.4",
        "unbox-primitive": "^1.0.1"
      }
    },
    "es-module-lexer": {
      "version": "0.9.3",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-0.9.3.tgz",
      "integrity": "sha512-1HQ2M2sPtxwnvOvT1ZClHyQDiggdNjURWpY2we6aMKCQiUVxTmVs2UYPLIrD84sS+kMdUwfBSylbJPwNnBrnHQ=="
    },
    "es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "requires": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      }
    },
    "escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw=="
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
    },
    "escodegen": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-2.0.0.tgz",
      "integrity": "sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw==",
      "requires": {
        "esprima": "^4.0.1",
        "estraverse": "^5.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "levn": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
          "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
          "requires": {
            "prelude-ls": "~1.1.2",
            "type-check": "~0.3.2"
          }
        },
        "optionator": {
          "version": "0.8.3",
          "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
          "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
          "requires": {
            "deep-is": "~0.1.3",
            "fast-levenshtein": "~2.0.6",
            "levn": "~0.3.0",
            "prelude-ls": "~1.1.2",
            "type-check": "~0.3.2",
            "word-wrap": "~1.2.3"
          }
        },
        "prelude-ls": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
          "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "optional": true
        },
        "type-check": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
          "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
          "requires": {
            "prelude-ls": "~1.1.2"
          }
        }
      }
    },
    "eslint": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.8.0.tgz",
      "integrity": "sha512-H3KXAzQGBH1plhYS3okDix2ZthuYJlQQEGE5k0IKuEqUSiyu4AmxxlJ2MtTYeJ3xB4jDhcYCwGOg2TXYdnDXlQ==",
      "requires": {
        "@eslint/eslintrc": "^1.0.5",
        "@humanwhocodes/config-array": "^0.9.2",
        "ajv": "^6.10.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.1.0",
        "eslint-utils": "^3.0.0",
        "eslint-visitor-keys": "^3.2.0",
        "espree": "^9.3.0",
        "esquery": "^1.4.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "functional-red-black-tree": "^1.0.1",
        "glob-parent": "^6.0.1",
        "globals": "^13.6.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.0.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.1",
        "regexpp": "^3.2.0",
        "strip-ansi": "^6.0.1",
        "strip-json-comments": "^3.1.0",
        "text-table": "^0.2.0",
        "v8-compile-cache": "^2.0.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "argparse": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
          "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q=="
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "escape-string-regexp": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
          "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA=="
        },
        "globals": {
          "version": "13.12.1",
          "resolved": "https://registry.npmjs.org/globals/-/globals-13.12.1.tgz",
          "integrity": "sha512-317dFlgY2pdJZ9rspXDks7073GpDmXdfbM3vYYp0HAMKGDh1FfWPleI2ljVNLQX5M5lXcAslTcPTrOrMEFOjyw==",
          "requires": {
            "type-fest": "^0.20.2"
          }
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "js-yaml": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
          "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
          "requires": {
            "argparse": "^2.0.1"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "eslint-config-react-app": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/eslint-config-react-app/-/eslint-config-react-app-7.0.0.tgz",
      "integrity": "sha512-xyymoxtIt1EOsSaGag+/jmcywRuieQoA2JbPCjnw9HukFj9/97aGPoZVFioaotzk1K5Qt9sHO5EutZbkrAXS0g==",
      "requires": {
        "@babel/core": "^7.16.0",
        "@babel/eslint-parser": "^7.16.3",
        "@rushstack/eslint-patch": "^1.1.0",
        "@typescript-eslint/eslint-plugin": "^5.5.0",
        "@typescript-eslint/parser": "^5.5.0",
        "babel-preset-react-app": "^10.0.1",
        "confusing-browser-globals": "^1.0.11",
        "eslint-plugin-flowtype": "^8.0.3",
        "eslint-plugin-import": "^2.25.3",
        "eslint-plugin-jest": "^25.3.0",
        "eslint-plugin-jsx-a11y": "^6.5.1",
        "eslint-plugin-react": "^7.27.1",
        "eslint-plugin-react-hooks": "^4.3.0",
        "eslint-plugin-testing-library": "^5.0.1"
      }
    },
    "eslint-import-resolver-node": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.6.tgz",
      "integrity": "sha512-0En0w03NRVMn9Uiyn8YRPDKvWjxCWkslUEhGNTdGx15RvPJYQ+lbOlqrlNI2vEAs4pDYK4f/HN2TbDmk5TP0iw==",
      "requires": {
        "debug": "^3.2.7",
        "resolve": "^1.20.0"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.7",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
          "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
          "requires": {
            "ms": "^2.1.1"
          }
        }
      }
    },
    "eslint-module-utils": {
      "version": "2.7.3",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.7.3.tgz",
      "integrity": "sha512-088JEC7O3lDZM9xGe0RerkOMd0EjFl+Yvd1jPWIkMT5u3H9+HC34mWWPnqPrN13gieT9pBOO+Qt07Nb/6TresQ==",
      "requires": {
        "debug": "^3.2.7",
        "find-up": "^2.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.7",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
          "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "find-up": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
          "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
          "requires": {
            "locate-path": "^2.0.0"
          }
        },
        "locate-path": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
          "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
          "requires": {
            "p-locate": "^2.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
          "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
          "requires": {
            "p-try": "^1.0.0"
          }
        },
        "p-locate": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
          "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
          "requires": {
            "p-limit": "^1.1.0"
          }
        },
        "p-try": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
          "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M="
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
        }
      }
    },
    "eslint-plugin-flowtype": {
      "version": "8.0.3",
      "resolved": "https://registry.npmjs.org/eslint-plugin-flowtype/-/eslint-plugin-flowtype-8.0.3.tgz",
      "integrity": "sha512-dX8l6qUL6O+fYPtpNRideCFSpmWOUVx5QcaGLVqe/vlDiBSe4vYljDWDETwnyFzpl7By/WVIu6rcrniCgH9BqQ==",
      "requires": {
        "lodash": "^4.17.21",
        "string-natural-compare": "^3.0.1"
      }
    },
    "eslint-plugin-import": {
      "version": "2.25.4",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.25.4.tgz",
      "integrity": "sha512-/KJBASVFxpu0xg1kIBn9AUa8hQVnszpwgE7Ld0lKAlx7Ie87yzEzCgSkekt+le/YVhiaosO4Y14GDAOc41nfxA==",
      "requires": {
        "array-includes": "^3.1.4",
        "array.prototype.flat": "^1.2.5",
        "debug": "^2.6.9",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-module-utils": "^2.7.2",
        "has": "^1.0.3",
        "is-core-module": "^2.8.0",
        "is-glob": "^4.0.3",
        "minimatch": "^3.0.4",
        "object.values": "^1.1.5",
        "resolve": "^1.20.0",
        "tsconfig-paths": "^3.12.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "doctrine": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
          "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
          "requires": {
            "esutils": "^2.0.2"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "eslint-plugin-jest": {
      "version": "25.7.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jest/-/eslint-plugin-jest-25.7.0.tgz",
      "integrity": "sha512-PWLUEXeeF7C9QGKqvdSbzLOiLTx+bno7/HC9eefePfEb257QFHg7ye3dh80AZVkaa/RQsBB1Q/ORQvg2X7F0NQ==",
      "requires": {
        "@typescript-eslint/experimental-utils": "^5.0.0"
      }
    },
    "eslint-plugin-jsx-a11y": {
      "version": "6.5.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.5.1.tgz",
      "integrity": "sha512-sVCFKX9fllURnXT2JwLN5Qgo24Ug5NF6dxhkmxsMEUZhXRcGg+X3e1JbJ84YePQKBl5E0ZjAH5Q4rkdcGY99+g==",
      "requires": {
        "@babel/runtime": "^7.16.3",
        "aria-query": "^4.2.2",
        "array-includes": "^3.1.4",
        "ast-types-flow": "^0.0.7",
        "axe-core": "^4.3.5",
        "axobject-query": "^2.2.0",
        "damerau-levenshtein": "^1.0.7",
        "emoji-regex": "^9.2.2",
        "has": "^1.0.3",
        "jsx-ast-utils": "^3.2.1",
        "language-tags": "^1.0.5",
        "minimatch": "^3.0.4"
      }
    },
    "eslint-plugin-react": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.28.0.tgz",
      "integrity": "sha512-IOlFIRHzWfEQQKcAD4iyYDndHwTQiCMcJVJjxempf203jnNLUnW34AXLrV33+nEXoifJE2ZEGmcjKPL8957eSw==",
      "requires": {
        "array-includes": "^3.1.4",
        "array.prototype.flatmap": "^1.2.5",
        "doctrine": "^2.1.0",
        "estraverse": "^5.3.0",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.0.4",
        "object.entries": "^1.1.5",
        "object.fromentries": "^2.0.5",
        "object.hasown": "^1.1.0",
        "object.values": "^1.1.5",
        "prop-types": "^15.7.2",
        "resolve": "^2.0.0-next.3",
        "semver": "^6.3.0",
        "string.prototype.matchall": "^4.0.6"
      },
      "dependencies": {
        "doctrine": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
          "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
          "requires": {
            "esutils": "^2.0.2"
          }
        },
        "resolve": {
          "version": "2.0.0-next.3",
          "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.3.tgz",
          "integrity": "sha512-W8LucSynKUIDu9ylraa7ueVZ7hc0uAgJBxVsQSKOXOyle8a93qXhcz+XAXZ8bIq2d6i4Ehddn6Evt+0/UwKk6Q==",
          "requires": {
            "is-core-module": "^2.2.0",
            "path-parse": "^1.0.6"
          }
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "eslint-plugin-react-hooks": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-4.3.0.tgz",
      "integrity": "sha512-XslZy0LnMn+84NEG9jSGR6eGqaZB3133L8xewQo3fQagbQuGt7a63gf+P1NGKZavEYEC3UXaWEAA/AqDkuN6xA=="
    },
    "eslint-plugin-testing-library": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-testing-library/-/eslint-plugin-testing-library-5.0.5.tgz",
      "integrity": "sha512-0j355vJpJCE/2g+aayIgJRUB6jBVqpD5ztMLGcadR1PgrgGPnPxN1HJuOAsAAwiMo27GwRnpJB8KOQzyNuNZrw==",
      "requires": {
        "@typescript-eslint/utils": "^5.10.2"
      }
    },
    "eslint-scope": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.1.0.tgz",
      "integrity": "sha512-aWwkhnS0qAXqNOgKOK0dJ2nvzEbhEvpy8OlJ9kZ0FeZnA6zpjv1/Vei+puGFFX7zkPCkHHXb7IDX3A+7yPrRWg==",
      "requires": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      }
    },
    "eslint-utils": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/eslint-utils/-/eslint-utils-3.0.0.tgz",
      "integrity": "sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==",
      "requires": {
        "eslint-visitor-keys": "^2.0.0"
      },
      "dependencies": {
        "eslint-visitor-keys": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-2.1.0.tgz",
          "integrity": "sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw=="
        }
      }
    },
    "eslint-visitor-keys": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.2.0.tgz",
      "integrity": "sha512-IOzT0X126zn7ALX0dwFiUQEdsfzrm4+ISsQS8nukaJXwEyYKRSnEIIDULYg1mCtGp7UUXgfGl7BIolXREQK+XQ=="
    },
    "eslint-webpack-plugin": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/eslint-webpack-plugin/-/eslint-webpack-plugin-3.1.1.tgz",
      "integrity": "sha512-xSucskTN9tOkfW7so4EaiFIkulWLXwCB/15H917lR6pTv0Zot6/fetFucmENRb7J5whVSFKIvwnrnsa78SG2yg==",
      "requires": {
        "@types/eslint": "^7.28.2",
        "jest-worker": "^27.3.1",
        "micromatch": "^4.0.4",
        "normalize-path": "^3.0.0",
        "schema-utils": "^3.1.1"
      }
    },
    "espree": {
      "version": "9.3.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.3.0.tgz",
      "integrity": "sha512-d/5nCsb0JcqsSEeQzFZ8DH1RmxPcglRWh24EFTlUEmCKoehXGdpsx0RkHDubqUI8LSAIKMQp4r9SzQ3n+sm4HQ==",
      "requires": {
        "acorn": "^8.7.0",
        "acorn-jsx": "^5.3.1",
        "eslint-visitor-keys": "^3.1.0"
      }
    },
    "esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
    },
    "esquery": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.4.0.tgz",
      "integrity": "sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==",
      "requires": {
        "estraverse": "^5.1.0"
      }
    },
    "esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "requires": {
        "estraverse": "^5.2.0"
      }
    },
    "estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA=="
    },
    "estree-walker": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-1.0.1.tgz",
      "integrity": "sha512-1fMXF3YP4pZZVozF8j/ZLfvnR8NSIljt56UhbZ5PeeDmmGHpgpdwQt7ITlGvYaQukCvuBRMLEiKiYC+oeIg4cg=="
    },
    "esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "eventemitter3": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
      "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw=="
    },
    "events": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
      "integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q=="
    },
    "execa": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
      "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
      "requires": {
        "cross-spawn": "^7.0.3",
        "get-stream": "^6.0.0",
        "human-signals": "^2.1.0",
        "is-stream": "^2.0.0",
        "merge-stream": "^2.0.0",
        "npm-run-path": "^4.0.1",
        "onetime": "^5.1.2",
        "signal-exit": "^3.0.3",
        "strip-final-newline": "^2.0.0"
      }
    },
    "exit": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
      "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw="
    },
    "expect": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/expect/-/expect-27.5.0.tgz",
      "integrity": "sha512-z73GZ132cBqrapO0X6BeRjyBXqOt9YeRtnDteHJIQqp5s2pZ41Hz23VUbsVFMfkrsFLU9GwoIRS0ZzLuFK8M5w==",
      "requires": {
        "@jest/types": "^27.5.0",
        "jest-get-type": "^27.5.0",
        "jest-matcher-utils": "^27.5.0",
        "jest-message-util": "^27.5.0"
      }
    },
    "express": {
      "version": "4.17.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.2.tgz",
      "integrity": "sha512-oxlxJxcQlYwqPWKVJJtvQiwHgosH/LrLSPA+H4UxpyvSS6jC5aH+5MoHFM+KABgTOt0APue4w66Ha8jCUo9QGg==",
      "requires": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.1",
        "content-disposition": "0.5.4",
        "content-type": "~1.0.4",
        "cookie": "0.4.1",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.7",
        "qs": "6.9.6",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.2.1",
        "send": "0.17.2",
        "serve-static": "1.14.2",
        "setprototypeof": "1.2.0",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "array-flatten": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
          "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        },
        "safe-buffer": {
          "version": "5.2.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
          "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
        }
      }
    },
    "fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="
    },
    "fast-glob": {
      "version": "3.2.11",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.11.tgz",
      "integrity": "sha512-xrO3+1bxSo3ZVHAnqzyuewYT6aMFHRAd4Kcs92MAonjwQZLsK9d0SF1IyQ3k5PoirxTW0Oe/RqFgMQ6TcNE5Ew==",
      "requires": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "dependencies": {
        "glob-parent": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
          "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
          "requires": {
            "is-glob": "^4.0.1"
          }
        }
      }
    },
    "fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc="
    },
    "fastq": {
      "version": "1.13.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
      "integrity": "sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==",
      "requires": {
        "reusify": "^1.0.4"
      }
    },
    "faye-websocket": {
      "version": "0.11.4",
      "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.4.tgz",
      "integrity": "sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==",
      "requires": {
        "websocket-driver": ">=0.5.1"
      }
    },
    "fb-watchman": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
      "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
      "requires": {
        "bser": "2.1.1"
      }
    },
    "file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "requires": {
        "flat-cache": "^3.0.4"
      }
    },
    "file-loader": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/file-loader/-/file-loader-6.2.0.tgz",
      "integrity": "sha512-qo3glqyTa61Ytg4u73GultjHGjdRyig3tG6lPtyX/jOEJvHif9uB0/OCI2Kif6ctF3caQTW2G5gym21oAsI4pw==",
      "requires": {
        "loader-utils": "^2.0.0",
        "schema-utils": "^3.0.0"
      }
    },
    "filelist": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/filelist/-/filelist-1.0.2.tgz",
      "integrity": "sha512-z7O0IS8Plc39rTCq6i6iHxk43duYOn8uFJiWSewIq0Bww1RNybVHSCjahmcC87ZqAm4OTvFzlzeGu3XAzG1ctQ==",
      "requires": {
        "minimatch": "^3.0.4"
      }
    },
    "filesize": {
      "version": "8.0.7",
      "resolved": "https://registry.npmjs.org/filesize/-/filesize-8.0.7.tgz",
      "integrity": "sha512-pjmC+bkIF8XI7fWaH8KxHcZL3DPybs1roSKP4rKDvy20tAWwIObE4+JIseG2byfGKhud5ZnM4YSGKBz7Sh0ndQ=="
    },
    "fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "requires": {
        "to-regex-range": "^5.0.1"
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "find-cache-dir": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.2.tgz",
      "integrity": "sha512-wXZV5emFEjrridIgED11OoUKLxiYjAcqot/NJdAkOhlJ+vGzwhOAfcG5OX1jP+S0PcjEn8bdMJv+g2jwQ3Onig==",
      "requires": {
        "commondir": "^1.0.1",
        "make-dir": "^3.0.2",
        "pkg-dir": "^4.1.0"
      }
    },
    "find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "requires": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      }
    },
    "flat-cache": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.0.4.tgz",
      "integrity": "sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==",
      "requires": {
        "flatted": "^3.1.0",
        "rimraf": "^3.0.2"
      }
    },
    "flatted": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.2.5.tgz",
      "integrity": "sha512-WIWGi2L3DyTUvUrwRKgGi9TwxQMUEqPOPQBVi71R96jZXJdFskXEmf54BoZaS1kknGODoIGASGEzBUYdyMCBJg=="
    },
    "follow-redirects": {
      "version": "1.14.7",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.14.7.tgz",
      "integrity": "sha512-+hbxoLbFMbRKDwohX8GkTataGqO6Jb7jGwpAlwgy2bIz25XtRm7KEzJM76R1WiNT5SwZkX4Y75SwBolkpmE7iQ=="
    },
    "fork-ts-checker-webpack-plugin": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fork-ts-checker-webpack-plugin/-/fork-ts-checker-webpack-plugin-6.5.0.tgz",
      "integrity": "sha512-cS178Y+xxtIjEUorcHddKS7yCMlrDPV31mt47blKKRfMd70Kxu5xruAFE2o9sDY6wVC5deuob/u/alD04YYHnw==",
      "requires": {
        "@babel/code-frame": "^7.8.3",
        "@types/json-schema": "^7.0.5",
        "chalk": "^4.1.0",
        "chokidar": "^3.4.2",
        "cosmiconfig": "^6.0.0",
        "deepmerge": "^4.2.2",
        "fs-extra": "^9.0.0",
        "glob": "^7.1.6",
        "memfs": "^3.1.2",
        "minimatch": "^3.0.4",
        "schema-utils": "2.7.0",
        "semver": "^7.3.2",
        "tapable": "^1.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "cosmiconfig": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-6.0.0.tgz",
          "integrity": "sha512-xb3ZL6+L8b9JLLCx3ZdoZy4+2ECphCMo2PwqgP1tlfVq6M6YReyzBJtvWWtbDSpNr9hn96pkCiZqUcFEc+54Qg==",
          "requires": {
            "@types/parse-json": "^4.0.0",
            "import-fresh": "^3.1.0",
            "parse-json": "^5.0.0",
            "path-type": "^4.0.0",
            "yaml": "^1.7.2"
          }
        },
        "fs-extra": {
          "version": "9.1.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
          "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
          "requires": {
            "at-least-node": "^1.0.0",
            "graceful-fs": "^4.2.0",
            "jsonfile": "^6.0.1",
            "universalify": "^2.0.0"
          }
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "schema-utils": {
          "version": "2.7.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.7.0.tgz",
          "integrity": "sha512-0ilKFI6QQF5nxDZLFn2dMjvc4hjg/Wkg7rHd3jK6/A4a1Hl9VFdQWvgB1UMGoU94pad1P/8N7fMcEnLnSiju8A==",
          "requires": {
            "@types/json-schema": "^7.0.4",
            "ajv": "^6.12.2",
            "ajv-keywords": "^3.4.1"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "tapable": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.1.3.tgz",
          "integrity": "sha512-4WK/bYZmj8xLr+HUCODHGF1ZFzsYffasLUgEiMBY4fgtltdO6B4WJtlSbPaDTLpYTcGVwM2qLnFTICEcNxs3kA=="
        }
      }
    },
    "form-data": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-3.0.1.tgz",
      "integrity": "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==",
      "requires": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "mime-types": "^2.1.12"
      }
    },
    "forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow=="
    },
    "fraction.js": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.1.3.tgz",
      "integrity": "sha512-pUHWWt6vHzZZiQJcM6S/0PXfS+g6FM4BF5rj9wZyreivhQPdsh5PpE25VtSNxq80wHS5RfY51Ii+8Z0Zl/pmzg=="
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "fs-extra": {
      "version": "10.0.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.0.0.tgz",
      "integrity": "sha512-C5owb14u9eJwizKGdchcDUQeFtlSHHthBk8pbX9Vc1PFZrLombudjDnNns88aYslCyF6IY5SUw3Roz6xShcEIQ==",
      "requires": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      }
    },
    "fs-monkey": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/fs-monkey/-/fs-monkey-1.0.3.tgz",
      "integrity": "sha512-cybjIfiiE+pTWicSCLFHSrXZ6EilF30oh91FDP9S2B051prEa7QWfrVTQm10/dDpswBDXZugPa1Ogu8Yh+HV0Q=="
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "optional": true
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
    "functional-red-black-tree": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
      "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc="
    },
    "gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg=="
    },
    "get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
    },
    "get-intrinsic": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
      "requires": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      }
    },
    "get-own-enumerable-property-symbols": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/get-own-enumerable-property-symbols/-/get-own-enumerable-property-symbols-3.0.2.tgz",
      "integrity": "sha512-I0UBV/XOz1XkIJHEUDMZAbzCThU/H8DxmSfmdGcKPnVhu2VfFqr34jr9777IyaTYvxjedWhqVIilEDsCdP5G6g=="
    },
    "get-package-type": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
      "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q=="
    },
    "get-stream": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
      "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg=="
    },
    "get-symbol-description": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.0.tgz",
      "integrity": "sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==",
      "requires": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.1.1"
      }
    },
    "glob": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",
      "integrity": "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==",
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "requires": {
        "is-glob": "^4.0.3"
      }
    },
    "glob-to-regexp": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
      "integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw=="
    },
    "global-modules": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/global-modules/-/global-modules-2.0.0.tgz",
      "integrity": "sha512-NGbfmJBp9x8IxyJSd1P+otYK8vonoJactOogrVfFRIAEY1ukil8RSKDz2Yo7wh1oihl51l/r6W4epkeKJHqL8A==",
      "requires": {
        "global-prefix": "^3.0.0"
      }
    },
    "global-prefix": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/global-prefix/-/global-prefix-3.0.0.tgz",
      "integrity": "sha512-awConJSVCHVGND6x3tmMaKcQvwXLhjdkmomy2W+Goaui8YPgYgXJZewhg3fWC+DlfqqQuWg8AwqjGTD2nAPVWg==",
      "requires": {
        "ini": "^1.3.5",
        "kind-of": "^6.0.2",
        "which": "^1.3.1"
      },
      "dependencies": {
        "which": {
          "version": "1.3.1",
          "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
          "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
          "requires": {
            "isexe": "^2.0.0"
          }
        }
      }
    },
    "globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="
    },
    "globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "requires": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      }
    },
    "graceful-fs": {
      "version": "4.2.9",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.9.tgz",
      "integrity": "sha512-NtNxqUcXgpW2iMrfqSfR73Glt39K+BLwWsPs94yR63v45T0Wbej7eRmL5cWfwEgqXnmjQp3zaJTshdRW/qC2ZQ=="
    },
    "gzip-size": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/gzip-size/-/gzip-size-6.0.0.tgz",
      "integrity": "sha512-ax7ZYomf6jqPTQ4+XCpUGyXKHk5WweS+e05MBO4/y3WJ5RkmPXNKvX+bx1behVILVwr6JSQvZAku021CHPXG3Q==",
      "requires": {
        "duplexer": "^0.1.2"
      }
    },
    "handle-thing": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz",
      "integrity": "sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg=="
    },
    "harmony-reflect": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/harmony-reflect/-/harmony-reflect-1.6.2.tgz",
      "integrity": "sha512-HIp/n38R9kQjDEziXyDTuW3vvoxxyxjxFzXLrBr18uB47GnSt+G9D29fqrpM5ZkspMcPICud3XsBJQ4Y2URg8g=="
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-bigints": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.1.tgz",
      "integrity": "sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA=="
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
    },
    "has-symbols": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
      "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw=="
    },
    "has-tostringtag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
      "integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
      "requires": {
        "has-symbols": "^1.0.2"
      }
    },
    "he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw=="
    },
    "hoopy": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/hoopy/-/hoopy-0.1.4.tgz",
      "integrity": "sha512-HRcs+2mr52W0K+x8RzcLzuPPmVIKMSv97RGHy0Ea9y/mpcaK+xTrjICA04KAHi4GRzxliNqNJEFYWHghy3rSfQ=="
    },
    "hpack.js": {
      "version": "2.1.6",
      "resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
      "integrity": "sha1-h3dMCUnlE/QuhFdbPEVoH63ioLI=",
      "requires": {
        "inherits": "^2.0.1",
        "obuf": "^1.0.0",
        "readable-stream": "^2.0.1",
        "wbuf": "^1.1.0"
      },
      "dependencies": {
        "readable-stream": {
          "version": "2.3.7",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
          "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        }
      }
    },
    "html-encoding-sniffer": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-2.0.1.tgz",
      "integrity": "sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ==",
      "requires": {
        "whatwg-encoding": "^1.0.5"
      }
    },
    "html-entities": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-2.3.2.tgz",
      "integrity": "sha512-c3Ab/url5ksaT0WyleslpBEthOzWhrjQbg75y7XUsfSzi3Dgzt0l8w5e7DylRn15MTlMMD58dTfzddNS2kcAjQ=="
    },
    "html-escaper": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
      "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg=="
    },
    "html-minifier-terser": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/html-minifier-terser/-/html-minifier-terser-6.1.0.tgz",
      "integrity": "sha512-YXxSlJBZTP7RS3tWnQw74ooKa6L9b9i9QYXY21eUEvhZ3u9XLfv6OnFsQq6RxkhHygsaUMvYsZRV5rU/OVNZxw==",
      "requires": {
        "camel-case": "^4.1.2",
        "clean-css": "^5.2.2",
        "commander": "^8.3.0",
        "he": "^1.2.0",
        "param-case": "^3.0.4",
        "relateurl": "^0.2.7",
        "terser": "^5.10.0"
      },
      "dependencies": {
        "commander": {
          "version": "8.3.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-8.3.0.tgz",
          "integrity": "sha512-OkTL9umf+He2DZkUq8f8J9of7yL6RJKI24dVITBmNfZBmri9zYZQrKkuXiKhyfPSu8tUhnVBB1iKXevvnlR4Ww=="
        }
      }
    },
    "html-webpack-plugin": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/html-webpack-plugin/-/html-webpack-plugin-5.5.0.tgz",
      "integrity": "sha512-sy88PC2cRTVxvETRgUHFrL4No3UxvcH8G1NepGhqaTT+GXN2kTamqasot0inS5hXeg1cMbFDt27zzo9p35lZVw==",
      "requires": {
        "@types/html-minifier-terser": "^6.0.0",
        "html-minifier-terser": "^6.0.2",
        "lodash": "^4.17.21",
        "pretty-error": "^4.0.0",
        "tapable": "^2.0.0"
      }
    },
    "htmlparser2": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-6.1.0.tgz",
      "integrity": "sha512-gyyPk6rgonLFEDGoeRgQNaEUvdJ4ktTmmUh/h2t7s+M8oPpIPxgNACWa+6ESR57kXstwqPiCut0V8NRpcwgU7A==",
      "requires": {
        "domelementtype": "^2.0.1",
        "domhandler": "^4.0.0",
        "domutils": "^2.5.2",
        "entities": "^2.0.0"
      },
      "dependencies": {
        "dom-serializer": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-1.3.2.tgz",
          "integrity": "sha512-5c54Bk5Dw4qAxNOI1pFEizPSjVsx5+bpJKmL2kPn8JhBUq2q09tTCa3mjijun2NfK78NMouDYNMBkOrPZiS+ig==",
          "requires": {
            "domelementtype": "^2.0.1",
            "domhandler": "^4.2.0",
            "entities": "^2.0.0"
          }
        },
        "domelementtype": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.2.0.tgz",
          "integrity": "sha512-DtBMo82pv1dFtUmHyr48beiuq792Sxohr+8Hm9zoxklYPfa6n0Z3Byjj2IV7bmr2IyqClnqEQhfgHJJ5QF0R5A=="
        },
        "domutils": {
          "version": "2.8.0",
          "resolved": "https://registry.npmjs.org/domutils/-/domutils-2.8.0.tgz",
          "integrity": "sha512-w96Cjofp72M5IIhpjgobBimYEfoPjx1Vx0BSX9P30WBdZW2WIKU0T1Bd0kz2eNZ9ikjKgHbEyKx8BB6H1L3h3A==",
          "requires": {
            "dom-serializer": "^1.0.1",
            "domelementtype": "^2.2.0",
            "domhandler": "^4.2.0"
          }
        }
      }
    },
    "http-deceiver": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
      "integrity": "sha1-+nFolEq5pRnTN8sL7HKE3D5yPYc="
    },
    "http-errors": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.8.1.tgz",
      "integrity": "sha512-Kpk9Sm7NmI+RHhnj6OIWDI1d6fIoFAtFt9RLaTMRlg/8w49juAStsrBgp0Dp4OdxdVbRIeKhtCUvoi/RuAhO4g==",
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.4",
        "setprototypeof": "1.2.0",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.1"
      }
    },
    "http-parser-js": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.5.5.tgz",
      "integrity": "sha512-x+JVEkO2PoM8qqpbPbOL3cqHPwerep7OwzK7Ay+sMQjKzaKCqWvjoXm5tqMP9tXWWTnTzAjIhXg+J99XYuPhPA=="
    },
    "http-proxy": {
      "version": "1.18.1",
      "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",
      "integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",
      "requires": {
        "eventemitter3": "^4.0.0",
        "follow-redirects": "^1.0.0",
        "requires-port": "^1.0.0"
      }
    },
    "http-proxy-agent": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",
      "integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",
      "requires": {
        "@tootallnate/once": "1",
        "agent-base": "6",
        "debug": "4"
      }
    },
    "http-proxy-middleware": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-2.0.3.tgz",
      "integrity": "sha512-1bloEwnrHMnCoO/Gcwbz7eSVvW50KPES01PecpagI+YLNLci4AcuKJrujW4Mc3sBLpFxMSlsLNHS5Nl/lvrTPA==",
      "requires": {
        "@types/http-proxy": "^1.17.8",
        "http-proxy": "^1.18.1",
        "is-glob": "^4.0.1",
        "is-plain-obj": "^3.0.0",
        "micromatch": "^4.0.2"
      }
    },
    "https-proxy-agent": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz",
      "integrity": "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==",
      "requires": {
        "agent-base": "6",
        "debug": "4"
      }
    },
    "human-signals": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
      "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw=="
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "icss-utils": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/icss-utils/-/icss-utils-5.1.0.tgz",
      "integrity": "sha512-soFhflCVWLfRNOPU3iv5Z9VUdT44xFRbzjLsEzSr5AQmgqPMTHdU3PMT1Cf1ssx8fLNJDA1juftYl+PUcv3MqA=="
    },
    "idb": {
      "version": "6.1.5",
      "resolved": "https://registry.npmjs.org/idb/-/idb-6.1.5.tgz",
      "integrity": "sha512-IJtugpKkiVXQn5Y+LteyBCNk1N8xpGV3wWZk9EVtZWH8DYkjBn0bX1XnGP9RkyZF0sAcywa6unHqSWKe7q4LGw=="
    },
    "identity-obj-proxy": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/identity-obj-proxy/-/identity-obj-proxy-3.0.0.tgz",
      "integrity": "sha1-lNK9qWCERT7zb7xarsN+D3nx/BQ=",
      "requires": {
        "harmony-reflect": "^1.4.6"
      }
    },
    "ignore": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.2.0.tgz",
      "integrity": "sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ=="
    },
    "immer": {
      "version": "9.0.12",
      "resolved": "https://registry.npmjs.org/immer/-/immer-9.0.12.tgz",
      "integrity": "sha512-lk7UNmSbAukB5B6dh9fnh5D0bJTOFKxVg2cyJWTYrWRfhLrLMBquONcUs3aFq507hNoIZEDDh8lb8UtOizSMhA=="
    },
    "import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "requires": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      }
    },
    "import-local": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.1.0.tgz",
      "integrity": "sha512-ASB07uLtnDs1o6EHjKpX34BKYDSqnFerfTOJL2HvMqF70LnxpjkzDB8J44oT9pu4AMPkQwf8jl6szgvNd2tRIg==",
      "requires": {
        "pkg-dir": "^4.2.0",
        "resolve-cwd": "^3.0.0"
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
    },
    "indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg=="
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew=="
    },
    "internal-slot": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.3.tgz",
      "integrity": "sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==",
      "requires": {
        "get-intrinsic": "^1.1.0",
        "has": "^1.0.3",
        "side-channel": "^1.0.4"
      }
    },
    "ip": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
      "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo="
    },
    "ipaddr.js": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-2.0.1.tgz",
      "integrity": "sha512-1qTgH9NG+IIJ4yfKs2e6Pp1bZg8wbDbKHT21HrLIeYBTRLgMYKnMTPAuI3Lcs61nfx5h1xlXnbJtH1kX5/d/ng=="
    },
    "is-arguments": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.1.1.tgz",
      "integrity": "sha512-8Q7EARjzEnKpt/PCD7e1cgUS0a6X8u5tdSiMqXhojOdoV9TsMsiO+9VLC5vAmO8N7/GmXn7yjR8qnA6bVAEzfA==",
      "requires": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      }
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
    },
    "is-bigint": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
      "integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
      "requires": {
        "has-bigints": "^1.0.1"
      }
    },
    "is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "requires": {
        "binary-extensions": "^2.0.0"
      }
    },
    "is-boolean-object": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
      "integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
      "requires": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      }
    },
    "is-callable": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.4.tgz",
      "integrity": "sha512-nsuwtxZfMX67Oryl9LCQ+upnC0Z0BgpwntpS89m1H/TLF0zNfzfLMV/9Wa/6MZsj0acpEjAO0KF1xT6ZdLl95w=="
    },
    "is-core-module": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.8.1.tgz",
      "integrity": "sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA==",
      "requires": {
        "has": "^1.0.3"
      }
    },
    "is-date-object": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
      "integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
      "requires": {
        "has-tostringtag": "^1.0.0"
      }
    },
    "is-docker": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
      "integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ=="
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
    },
    "is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
    },
    "is-generator-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
      "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ=="
    },
    "is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-module": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-module/-/is-module-1.0.0.tgz",
      "integrity": "sha1-Mlj7afeMFNW4FdZkM2tM/7ZEFZE="
    },
    "is-negative-zero": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.2.tgz",
      "integrity": "sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA=="
    },
    "is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
    },
    "is-number-object": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.6.tgz",
      "integrity": "sha512-bEVOqiRcvo3zO1+G2lVMy+gkkEm9Yh7cDMRusKKu5ZJKPUYSJwICTKZrNKHA2EbSP0Tu0+6B/emsYNHZyn6K8g==",
      "requires": {
        "has-tostringtag": "^1.0.0"
      }
    },
    "is-obj": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-1.0.1.tgz",
      "integrity": "sha1-PkcprB9f3gJc19g6iW2rn09n2w8="
    },
    "is-path-cwd": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
      "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ=="
    },
    "is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ=="
    },
    "is-plain-obj": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-3.0.0.tgz",
      "integrity": "sha512-gwsOE28k+23GP1B6vFl1oVh/WOzmawBrKwo5Ev6wMKzPkaXaCDIQKzLnvsA42DRlbVTWorkgTKIviAKCWkfUwA=="
    },
    "is-potential-custom-element-name": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
      "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ=="
    },
    "is-regex": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
      "integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
      "requires": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      }
    },
    "is-regexp": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-regexp/-/is-regexp-1.0.0.tgz",
      "integrity": "sha1-/S2INUXEa6xaYz57mgnof6LLUGk="
    },
    "is-root": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-root/-/is-root-2.1.0.tgz",
      "integrity": "sha512-AGOriNp96vNBd3HtU+RzFEc75FfR5ymiYv8E553I71SCeXBiMsVDUtdio1OEFvrPyLIQ9tVR5RxXIFe5PUFjMg=="
    },
    "is-shared-array-buffer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.1.tgz",
      "integrity": "sha512-IU0NmyknYZN0rChcKhRO1X8LYz5Isj/Fsqh8NJOSf+N/hCOTwy29F32Ik7a+QszE63IdvmwdTPDd6cZ5pg4cwA=="
    },
    "is-stream": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
      "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg=="
    },
    "is-string": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
      "integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
      "requires": {
        "has-tostringtag": "^1.0.0"
      }
    },
    "is-symbol": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
      "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
      "requires": {
        "has-symbols": "^1.0.2"
      }
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
    },
    "is-weakref": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
      "integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
      "requires": {
        "call-bind": "^1.0.2"
      }
    },
    "is-wsl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
      "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
      "requires": {
        "is-docker": "^2.0.0"
      }
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
    },
    "istanbul-lib-coverage": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.0.tgz",
      "integrity": "sha512-eOeJ5BHCmHYvQK7xt9GkdHuzuCGS1Y6g9Gvnx3Ym33fz/HpLRYxiS0wHNr+m/MBC8B647Xt608vCDEvhl9c6Mw=="
    },
    "istanbul-lib-instrument": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-5.1.0.tgz",
      "integrity": "sha512-czwUz525rkOFDJxfKK6mYfIs9zBKILyrZQxjz3ABhjQXhbhFsSbo1HW/BFcsDnfJYJWA6thRR5/TUY2qs5W99Q==",
      "requires": {
        "@babel/core": "^7.12.3",
        "@babel/parser": "^7.14.7",
        "@istanbuljs/schema": "^0.1.2",
        "istanbul-lib-coverage": "^3.2.0",
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "istanbul-lib-report": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
      "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
      "requires": {
        "istanbul-lib-coverage": "^3.0.0",
        "make-dir": "^3.0.0",
        "supports-color": "^7.1.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "istanbul-lib-source-maps": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.1.tgz",
      "integrity": "sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==",
      "requires": {
        "debug": "^4.1.1",
        "istanbul-lib-coverage": "^3.0.0",
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "istanbul-reports": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.1.4.tgz",
      "integrity": "sha512-r1/DshN4KSE7xWEknZLLLLDn5CJybV3nw01VTkp6D5jzLuELlcbudfj/eSQFvrKsJuTVCGnePO7ho82Nw9zzfw==",
      "requires": {
        "html-escaper": "^2.0.0",
        "istanbul-lib-report": "^3.0.0"
      }
    },
    "jake": {
      "version": "10.8.2",
      "resolved": "https://registry.npmjs.org/jake/-/jake-10.8.2.tgz",
      "integrity": "sha512-eLpKyrfG3mzvGE2Du8VoPbeSkRry093+tyNjdYaBbJS9v17knImYGNXQCUV0gLxQtF82m3E8iRb/wdSQZLoq7A==",
      "requires": {
        "async": "0.9.x",
        "chalk": "^2.4.2",
        "filelist": "^1.0.1",
        "minimatch": "^3.0.4"
      },
      "dependencies": {
        "async": {
          "version": "0.9.2",
          "resolved": "https://registry.npmjs.org/async/-/async-0.9.2.tgz",
          "integrity": "sha1-rqdNXmHB+JlhO/ZL2mbUx48v0X0="
        }
      }
    },
    "jest": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest/-/jest-27.5.0.tgz",
      "integrity": "sha512-sCMZhL9zy0fiFc4H0cKlXq7BcghMSxm5ZnEyaPWTteArU5ix6JjOKyOXSUBGLTQCmt5kuX9zEvQ9BSshHOPB3A==",
      "requires": {
        "@jest/core": "^27.5.0",
        "import-local": "^3.0.2",
        "jest-cli": "^27.5.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "jest-cli": {
          "version": "27.5.0",
          "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-27.5.0.tgz",
          "integrity": "sha512-9ANs79Goz1ULKtG7HDm/F//4E69v8EFOLXRIHmeC/eK1xTUeQGlU6XP0Zwst386sKaKB4O60qhWY/UaTBS2MLA==",
          "requires": {
            "@jest/core": "^27.5.0",
            "@jest/test-result": "^27.5.0",
            "@jest/types": "^27.5.0",
            "chalk": "^4.0.0",
            "exit": "^0.1.2",
            "graceful-fs": "^4.2.9",
            "import-local": "^3.0.2",
            "jest-config": "^27.5.0",
            "jest-util": "^27.5.0",
            "jest-validate": "^27.5.0",
            "prompts": "^2.0.1",
            "yargs": "^16.2.0"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-changed-files": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-27.5.0.tgz",
      "integrity": "sha512-BGWKI7E6ORqbF5usF1oA4ftbkhVZVrXr8jB0/BrU6TAn3kfOVwX2Zx6pKIXYutJ+qNEjT8Da/gGak0ajya/StA==",
      "requires": {
        "@jest/types": "^27.5.0",
        "execa": "^5.0.0",
        "throat": "^6.0.1"
      }
    },
    "jest-circus": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-circus/-/jest-circus-27.5.0.tgz",
      "integrity": "sha512-+NPd1OxpAHYKjbW8dgL0huFgmtZRKSUKee/UtRgZJEfAxCeA12d7sp0coh5EGDBpW4fCk1Pcia/2dG+j6BQvdw==",
      "requires": {
        "@jest/environment": "^27.5.0",
        "@jest/test-result": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "co": "^4.6.0",
        "dedent": "^0.7.0",
        "expect": "^27.5.0",
        "is-generator-fn": "^2.0.0",
        "jest-each": "^27.5.0",
        "jest-matcher-utils": "^27.5.0",
        "jest-message-util": "^27.5.0",
        "jest-runtime": "^27.5.0",
        "jest-snapshot": "^27.5.0",
        "jest-util": "^27.5.0",
        "pretty-format": "^27.5.0",
        "slash": "^3.0.0",
        "stack-utils": "^2.0.3",
        "throat": "^6.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-config": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-27.5.0.tgz",
      "integrity": "sha512-eOIpvpXFz5WHuIYZN1QmvBLEjsSk3w+IAC/2jBpZClbprF53Bj9meBMgAbE15DSkaaJBDFmhXXd1L2eCLaWxQw==",
      "requires": {
        "@babel/core": "^7.8.0",
        "@jest/test-sequencer": "^27.5.0",
        "@jest/types": "^27.5.0",
        "babel-jest": "^27.5.0",
        "chalk": "^4.0.0",
        "ci-info": "^3.2.0",
        "deepmerge": "^4.2.2",
        "glob": "^7.1.1",
        "graceful-fs": "^4.2.9",
        "jest-circus": "^27.5.0",
        "jest-environment-jsdom": "^27.5.0",
        "jest-environment-node": "^27.5.0",
        "jest-get-type": "^27.5.0",
        "jest-jasmine2": "^27.5.0",
        "jest-regex-util": "^27.5.0",
        "jest-resolve": "^27.5.0",
        "jest-runner": "^27.5.0",
        "jest-util": "^27.5.0",
        "jest-validate": "^27.5.0",
        "micromatch": "^4.0.4",
        "pretty-format": "^27.5.0",
        "slash": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-diff": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-27.5.0.tgz",
      "integrity": "sha512-zztvHDCq/QcAVv+o6rts0reupSOxyrX+KLQEOMWCW2trZgcBFgp/oTK7hJCGpXvEIqKrQzyQlaPKn9W04+IMQg==",
      "requires": {
        "chalk": "^4.0.0",
        "diff-sequences": "^27.5.0",
        "jest-get-type": "^27.5.0",
        "pretty-format": "^27.5.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-docblock": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-27.5.0.tgz",
      "integrity": "sha512-U4MtJgdZn2x+jpPzd7NAYvDmgJAA5h9QxVAwsyuH7IymGzY8VGHhAkHcIGOmtmdC61ORLxCbEhj6fCJsaCWzXA==",
      "requires": {
        "detect-newline": "^3.0.0"
      }
    },
    "jest-each": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-27.5.0.tgz",
      "integrity": "sha512-2vpajSdDMZmAxjSP1f4BG9KKduwHtuaI0w66oqLUkfaGUU7Ix/W+d8BW0h3/QEJiew7hR0GSblqdFwTEEbhBdw==",
      "requires": {
        "@jest/types": "^27.5.0",
        "chalk": "^4.0.0",
        "jest-get-type": "^27.5.0",
        "jest-util": "^27.5.0",
        "pretty-format": "^27.5.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-environment-jsdom": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-27.5.0.tgz",
      "integrity": "sha512-sX49N8rjp6HSHeGpNgLk6mtHRd1IPAnE/u7wLQkb6Tz/1E08Q++Y8Zk/IbpVdcFywbzH1icFqEuDuHJ6o+uXXg==",
      "requires": {
        "@jest/environment": "^27.5.0",
        "@jest/fake-timers": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "jest-mock": "^27.5.0",
        "jest-util": "^27.5.0",
        "jsdom": "^16.6.0"
      }
    },
    "jest-environment-node": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-27.5.0.tgz",
      "integrity": "sha512-7UzisMMfGyrURhS/eUa7p7mgaqN3ajHylsjOgfcn0caNeYRZq4LHKZLfAxrPM34DWLnBZcRupEJlpQsizdSUsw==",
      "requires": {
        "@jest/environment": "^27.5.0",
        "@jest/fake-timers": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "jest-mock": "^27.5.0",
        "jest-util": "^27.5.0"
      }
    },
    "jest-get-type": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-27.5.0.tgz",
      "integrity": "sha512-Vp6O8a52M/dahXRG/E0EJuWQROps2mDQ0sJYPgO8HskhdLwj9ajgngy2OAqZgV6e/RcU67WUHq6TgfvJb8flbA=="
    },
    "jest-haste-map": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-27.5.0.tgz",
      "integrity": "sha512-0KfckSBEKV+D6e0toXmIj4zzp72EiBnvkC0L+xYxenkLhAdkp2/8tye4AgMzz7Fqb1r8SWtz7+s1UQLrxMBang==",
      "requires": {
        "@jest/types": "^27.5.0",
        "@types/graceful-fs": "^4.1.2",
        "@types/node": "*",
        "anymatch": "^3.0.3",
        "fb-watchman": "^2.0.0",
        "fsevents": "^2.3.2",
        "graceful-fs": "^4.2.9",
        "jest-regex-util": "^27.5.0",
        "jest-serializer": "^27.5.0",
        "jest-util": "^27.5.0",
        "jest-worker": "^27.5.0",
        "micromatch": "^4.0.4",
        "walker": "^1.0.7"
      }
    },
    "jest-jasmine2": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-27.5.0.tgz",
      "integrity": "sha512-X7sT3HLNjjrBEepilxzPyNhNdyunaFBepo1L3T/fvYb9tb8Wb8qY576gwIa+SZcqYUqAA7/bT3EpZI4lAp0Qew==",
      "requires": {
        "@jest/environment": "^27.5.0",
        "@jest/source-map": "^27.5.0",
        "@jest/test-result": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "co": "^4.6.0",
        "expect": "^27.5.0",
        "is-generator-fn": "^2.0.0",
        "jest-each": "^27.5.0",
        "jest-matcher-utils": "^27.5.0",
        "jest-message-util": "^27.5.0",
        "jest-runtime": "^27.5.0",
        "jest-snapshot": "^27.5.0",
        "jest-util": "^27.5.0",
        "pretty-format": "^27.5.0",
        "throat": "^6.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-leak-detector": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-27.5.0.tgz",
      "integrity": "sha512-Ak3k+DD3ao5d4/zzJrxAQ5UV5wiCrp47jH94ZD4/vXSzQgE6WBVDfg83VtculLILO7Y6/Q/7yzKSrtN9Na8luA==",
      "requires": {
        "jest-get-type": "^27.5.0",
        "pretty-format": "^27.5.0"
      }
    },
    "jest-matcher-utils": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-27.5.0.tgz",
      "integrity": "sha512-5ruyzWMGb1ilCWD6ECwNdOhQBeIXAjHmHd5c3uO6quR7RIMHPRP2ucOaejz2j+0R0Ko4GanWM6SqXAeF8nYN5g==",
      "requires": {
        "chalk": "^4.0.0",
        "jest-diff": "^27.5.0",
        "jest-get-type": "^27.5.0",
        "pretty-format": "^27.5.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-message-util": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-27.5.0.tgz",
      "integrity": "sha512-lfbWRhTtmZMEHPAtl0SrvNzK1F4UnVNMHOliRQT2BJ4sBFzIb0gBCHA4ebWD4o6l1fUyvDPxM01K9OIMQTAdQw==",
      "requires": {
        "@babel/code-frame": "^7.12.13",
        "@jest/types": "^27.5.0",
        "@types/stack-utils": "^2.0.0",
        "chalk": "^4.0.0",
        "graceful-fs": "^4.2.9",
        "micromatch": "^4.0.4",
        "pretty-format": "^27.5.0",
        "slash": "^3.0.0",
        "stack-utils": "^2.0.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-mock": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-27.5.0.tgz",
      "integrity": "sha512-PHluG6MJGng82/sxh8OiB9fnxzNn3cazceSHCAmAKs4g5rMhc3EZCrJXv+4w61rA2WGagMUj7QLLrA1SRlFpzQ==",
      "requires": {
        "@jest/types": "^27.5.0",
        "@types/node": "*"
      }
    },
    "jest-pnp-resolver": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.2.tgz",
      "integrity": "sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w=="
    },
    "jest-regex-util": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-27.5.0.tgz",
      "integrity": "sha512-e9LqSd6HsDsqd7KS3rNyYwmQAaG9jq4U3LbnwVxN/y3nNlDzm2OFs596uo9zrUY+AV1opXq6ome78tRDUCRWfA=="
    },
    "jest-resolve": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-27.5.0.tgz",
      "integrity": "sha512-PkDpYEGV/nFqThnIrlPtj8oTxyAV3iuuS6or7dZYyUWaHr/tyyVb5qfBmZS6FEr7ozBHgjrF1bgcgIefnlicbw==",
      "requires": {
        "@jest/types": "^27.5.0",
        "chalk": "^4.0.0",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^27.5.0",
        "jest-pnp-resolver": "^1.2.2",
        "jest-util": "^27.5.0",
        "jest-validate": "^27.5.0",
        "resolve": "^1.20.0",
        "resolve.exports": "^1.1.0",
        "slash": "^3.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-resolve-dependencies": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-27.5.0.tgz",
      "integrity": "sha512-xQsy7CmrT4CJxdNUEdzZU2M/v6YmtQ/pkJM+sx7TA1siG1zfsZuo78PZvzglwRMQFr88f3Su4Om8OEBAic+SMw==",
      "requires": {
        "@jest/types": "^27.5.0",
        "jest-regex-util": "^27.5.0",
        "jest-snapshot": "^27.5.0"
      }
    },
    "jest-runner": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-27.5.0.tgz",
      "integrity": "sha512-RMzXhkJLLOKKgUPY2trpyVBijaFmswMtgoCCBk2PQVRHC6yo1vLd1/jmFP39s5OXXnt7rntuzKSYvxl+QUibqQ==",
      "requires": {
        "@jest/console": "^27.5.0",
        "@jest/environment": "^27.5.0",
        "@jest/test-result": "^27.5.0",
        "@jest/transform": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "emittery": "^0.8.1",
        "graceful-fs": "^4.2.9",
        "jest-docblock": "^27.5.0",
        "jest-environment-jsdom": "^27.5.0",
        "jest-environment-node": "^27.5.0",
        "jest-haste-map": "^27.5.0",
        "jest-leak-detector": "^27.5.0",
        "jest-message-util": "^27.5.0",
        "jest-resolve": "^27.5.0",
        "jest-runtime": "^27.5.0",
        "jest-util": "^27.5.0",
        "jest-worker": "^27.5.0",
        "source-map-support": "^0.5.6",
        "throat": "^6.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-runtime": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-27.5.0.tgz",
      "integrity": "sha512-T7APxCPjN3p3ePcLuypbWtD0UZHyAdvIADZ9ABI/sFZ9t/Rf2xIUd6D7RzZIX+unewJRooVGWrgDIgeUuj0OUA==",
      "requires": {
        "@jest/environment": "^27.5.0",
        "@jest/fake-timers": "^27.5.0",
        "@jest/globals": "^27.5.0",
        "@jest/source-map": "^27.5.0",
        "@jest/test-result": "^27.5.0",
        "@jest/transform": "^27.5.0",
        "@jest/types": "^27.5.0",
        "chalk": "^4.0.0",
        "cjs-module-lexer": "^1.0.0",
        "collect-v8-coverage": "^1.0.0",
        "execa": "^5.0.0",
        "glob": "^7.1.3",
        "graceful-fs": "^4.2.9",
        "jest-haste-map": "^27.5.0",
        "jest-message-util": "^27.5.0",
        "jest-mock": "^27.5.0",
        "jest-regex-util": "^27.5.0",
        "jest-resolve": "^27.5.0",
        "jest-snapshot": "^27.5.0",
        "jest-util": "^27.5.0",
        "slash": "^3.0.0",
        "strip-bom": "^4.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "strip-bom": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
          "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-serializer": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-27.5.0.tgz",
      "integrity": "sha512-aSDFqQlVXtBH+Zb5dl9mCvTSFkabixk/9P9cpngL4yJKpmEi9USxfDhONFMzJrtftPvZw3PcltUVmtFZTB93rg==",
      "requires": {
        "@types/node": "*",
        "graceful-fs": "^4.2.9"
      }
    },
    "jest-snapshot": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-27.5.0.tgz",
      "integrity": "sha512-cAJj15uqWGkro0bfcv/EgusBnqNgCpRruFQZghsMYTq4Fm2lk/VhAf8DgRr8wvhR6Ue1hkeL8tn70Cw4t8x/5A==",
      "requires": {
        "@babel/core": "^7.7.2",
        "@babel/generator": "^7.7.2",
        "@babel/plugin-syntax-typescript": "^7.7.2",
        "@babel/traverse": "^7.7.2",
        "@babel/types": "^7.0.0",
        "@jest/transform": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/babel__traverse": "^7.0.4",
        "@types/prettier": "^2.1.5",
        "babel-preset-current-node-syntax": "^1.0.0",
        "chalk": "^4.0.0",
        "expect": "^27.5.0",
        "graceful-fs": "^4.2.9",
        "jest-diff": "^27.5.0",
        "jest-get-type": "^27.5.0",
        "jest-haste-map": "^27.5.0",
        "jest-matcher-utils": "^27.5.0",
        "jest-message-util": "^27.5.0",
        "jest-util": "^27.5.0",
        "natural-compare": "^1.4.0",
        "pretty-format": "^27.5.0",
        "semver": "^7.3.2"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-util": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-27.5.0.tgz",
      "integrity": "sha512-FUUqOx0gAzJy3ytatT1Ss372M1kmhczn8x7aE0++11oPGW1FyD/5NjYBI8w1KOXFm6IVjtaZm2szfJJL+CHs0g==",
      "requires": {
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "chalk": "^4.0.0",
        "ci-info": "^3.2.0",
        "graceful-fs": "^4.2.9",
        "picomatch": "^2.2.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-validate": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-27.5.0.tgz",
      "integrity": "sha512-2XZzQWNrY9Ypo11mm4ZeVjvr++CQG/45XnmA2aWwx155lTwy1JGFI8LpQ2dBCSAeO21ooqg/FCIvv9WwfnPClA==",
      "requires": {
        "@jest/types": "^27.5.0",
        "camelcase": "^6.2.0",
        "chalk": "^4.0.0",
        "jest-get-type": "^27.5.0",
        "leven": "^3.1.0",
        "pretty-format": "^27.5.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-watch-typeahead": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/jest-watch-typeahead/-/jest-watch-typeahead-1.0.0.tgz",
      "integrity": "sha512-jxoszalAb394WElmiJTFBMzie/RDCF+W7Q29n5LzOPtcoQoHWfdUtHFkbhgf5NwWe8uMOxvKb/g7ea7CshfkTw==",
      "requires": {
        "ansi-escapes": "^4.3.1",
        "chalk": "^4.0.0",
        "jest-regex-util": "^27.0.0",
        "jest-watcher": "^27.0.0",
        "slash": "^4.0.0",
        "string-length": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
          "integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA=="
        },
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "char-regex": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-2.0.0.tgz",
          "integrity": "sha512-oGu2QekBMXgyQNWPDRQ001bjvDnZe4/zBTz37TMbiKz1NbNiyiH5hRkobe7npRN6GfbGbxMYFck/vQ1r9c1VMA=="
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "slash": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-4.0.0.tgz",
          "integrity": "sha512-3dOsAHXXUkQTpOYcoAxLIorMTp4gIQr5IW3iVb7A7lFIp0VHhnynm9izx6TssdrIcVIESAlVjtnO2K8bg+Coew=="
        },
        "string-length": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/string-length/-/string-length-5.0.1.tgz",
          "integrity": "sha512-9Ep08KAMUn0OadnVaBuRdE2l615CQ508kr0XMadjClfYpdCyvrbFp6Taebo8yyxokQ4viUd/xPPUA4FGgUa0ow==",
          "requires": {
            "char-regex": "^2.0.0",
            "strip-ansi": "^7.0.1"
          }
        },
        "strip-ansi": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.0.1.tgz",
          "integrity": "sha512-cXNxvT8dFNRVfhVME3JAe98mkXDYN2O1l7jmcwMnOslDeESg1rF/OZMtK0nRAhiari1unG5cD4jG3rapUAkLbw==",
          "requires": {
            "ansi-regex": "^6.0.1"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-watcher": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-27.5.0.tgz",
      "integrity": "sha512-MhIeIvEd6dnnspE0OfYrqHOAfZZdyFqx/k8U2nvVFSkLYf22qAFfyNWPVQYcwqKVNobcOhJoT0kV/nRHGbqK8A==",
      "requires": {
        "@jest/test-result": "^27.5.0",
        "@jest/types": "^27.5.0",
        "@types/node": "*",
        "ansi-escapes": "^4.2.1",
        "chalk": "^4.0.0",
        "jest-util": "^27.5.0",
        "string-length": "^4.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "jest-worker": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.5.0.tgz",
      "integrity": "sha512-8OEHiPNOPTfaWnJ2SUHM8fmgeGq37uuGsQBvGKQJl1f+6WIy6g7G3fE2ruI5294bUKUI9FaCWt5hDvO8HSwsSg==",
      "requires": {
        "@types/node": "*",
        "merge-stream": "^2.0.0",
        "supports-color": "^8.0.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "8.1.1",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
          "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
    },
    "js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsdom": {
      "version": "16.7.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-16.7.0.tgz",
      "integrity": "sha512-u9Smc2G1USStM+s/x1ru5Sxrl6mPYCbByG1U/hUmqaVsm4tbNyS7CicOSRyuGQYZhTu0h84qkZZQ/I+dzizSVw==",
      "requires": {
        "abab": "^2.0.5",
        "acorn": "^8.2.4",
        "acorn-globals": "^6.0.0",
        "cssom": "^0.4.4",
        "cssstyle": "^2.3.0",
        "data-urls": "^2.0.0",
        "decimal.js": "^10.2.1",
        "domexception": "^2.0.1",
        "escodegen": "^2.0.0",
        "form-data": "^3.0.0",
        "html-encoding-sniffer": "^2.0.1",
        "http-proxy-agent": "^4.0.1",
        "https-proxy-agent": "^5.0.0",
        "is-potential-custom-element-name": "^1.0.1",
        "nwsapi": "^2.2.0",
        "parse5": "6.0.1",
        "saxes": "^5.0.1",
        "symbol-tree": "^3.2.4",
        "tough-cookie": "^4.0.0",
        "w3c-hr-time": "^1.0.2",
        "w3c-xmlserializer": "^2.0.0",
        "webidl-conversions": "^6.1.0",
        "whatwg-encoding": "^1.0.5",
        "whatwg-mimetype": "^2.3.0",
        "whatwg-url": "^8.5.0",
        "ws": "^7.4.6",
        "xml-name-validator": "^3.0.0"
      }
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
    },
    "json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw=="
    },
    "json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w=="
    },
    "json-schema": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.4.0.tgz",
      "integrity": "sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA=="
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
    },
    "json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE="
    },
    "json5": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
      "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
      "requires": {
        "minimist": "^1.2.5"
      }
    },
    "jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "requires": {
        "graceful-fs": "^4.1.6",
        "universalify": "^2.0.0"
      }
    },
    "jsonpointer": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/jsonpointer/-/jsonpointer-5.0.0.tgz",
      "integrity": "sha512-PNYZIdMjVIvVgDSYKTT63Y+KZ6IZvGRNNWcxwD+GNnUz1MKPfv30J8ueCjdwcN0nDx2SlshgyB7Oy0epAzVRRg=="
    },
    "jsx-ast-utils": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.2.1.tgz",
      "integrity": "sha512-uP5vu8xfy2F9A6LGC22KO7e2/vGTS1MhP+18f++ZNlf0Ohaxbc9nIEwHAsejlJKyzfZzU5UIhe5ItYkitcZnZA==",
      "requires": {
        "array-includes": "^3.1.3",
        "object.assign": "^4.1.2"
      }
    },
    "kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
    },
    "kleur": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
      "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w=="
    },
    "klona": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/klona/-/klona-2.0.5.tgz",
      "integrity": "sha512-pJiBpiXMbt7dkzXe8Ghj/u4FfXOOa98fPW+bihOJ4SjnoijweJrNThJfd3ifXpXhREjpoF2mZVH1GfS9LV3kHQ=="
    },
    "language-subtag-registry": {
      "version": "0.3.21",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.21.tgz",
      "integrity": "sha512-L0IqwlIXjilBVVYKFT37X9Ih11Um5NEl9cbJIuU/SwP/zEEAbBPOnEeeuxVMf45ydWQRDQN3Nqc96OgbH1K+Pg=="
    },
    "language-tags": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.5.tgz",
      "integrity": "sha1-0yHbxNowuovzAk4ED6XBRmH5GTo=",
      "requires": {
        "language-subtag-registry": "~0.3.2"
      }
    },
    "leven": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
      "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="
    },
    "levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "requires": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      }
    },
    "lilconfig": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.0.4.tgz",
      "integrity": "sha512-bfTIN7lEsiooCocSISTWXkiWJkRqtL9wYtYy+8EK3Y41qh3mpwPU0ycTOgjdY9ErwXCc8QyrQp82bdL0Xkm9yA=="
    },
    "lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg=="
    },
    "loader-runner": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.2.0.tgz",
      "integrity": "sha512-92+huvxMvYlMzMt0iIOukcwYBFpkYJdpl2xsZ7LrlayO7E8SOv+JJUEK17B/dJIHAOLMfh2dZZ/Y18WgmGtYNw=="
    },
    "loader-utils": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.2.tgz",
      "integrity": "sha512-TM57VeHptv569d/GKh6TAYdzKblwDNiumOdkFnejjD0XwTH87K90w3O7AiJRqdQoXygvi1VQTJTLGhJl7WqA7A==",
      "requires": {
        "big.js": "^5.2.2",
        "emojis-list": "^3.0.0",
        "json5": "^2.1.2"
      }
    },
    "locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "requires": {
        "p-locate": "^5.0.0"
      }
    },
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    },
    "lodash.debounce": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
      "integrity": "sha1-gteb/zCmfEAF/9XiUVMArZyk168="
    },
    "lodash.memoize": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
      "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4="
    },
    "lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ=="
    },
    "lodash.sortby": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
      "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg="
    },
    "lodash.uniq": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
      "integrity": "sha1-0CJTc662Uq3BvILklFM5qEJ1R3M="
    },
    "loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "requires": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      }
    },
    "lower-case": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.2.tgz",
      "integrity": "sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==",
      "requires": {
        "tslib": "^2.0.3"
      },
      "dependencies": {
        "tslib": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
          "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw=="
        }
      }
    },
    "lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "lz-string": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/lz-string/-/lz-string-1.4.4.tgz",
      "integrity": "sha1-wNjq82BZ9wV5bh40SBHPTEmNOiY="
    },
    "magic-string": {
      "version": "0.25.7",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.25.7.tgz",
      "integrity": "sha512-4CrMT5DOHTDk4HYDlzmwu4FVCcIYI8gauveasrdCu2IKIFOJ3f0v/8MDGJCDL9oD2ppz/Av1b0Nj345H9M+XIA==",
      "requires": {
        "sourcemap-codec": "^1.4.4"
      }
    },
    "make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "requires": {
        "semver": "^6.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "makeerror": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.12.tgz",
      "integrity": "sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==",
      "requires": {
        "tmpl": "1.0.5"
      }
    },
    "mdn-data": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.4.tgz",
      "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA=="
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
    },
    "memfs": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/memfs/-/memfs-3.4.1.tgz",
      "integrity": "sha512-1c9VPVvW5P7I85c35zAdEr1TD5+F11IToIHIlrVIcflfnzPkJa0ZoYEoEdYDP8KgPFoSZ/opDrUsAoZWym3mtw==",
      "requires": {
        "fs-monkey": "1.0.3"
      }
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
    },
    "merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
    },
    "merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg=="
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
    },
    "micromatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
      "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
      "requires": {
        "braces": "^3.0.1",
        "picomatch": "^2.2.3"
      }
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
    },
    "mime-db": {
      "version": "1.51.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.51.0.tgz",
      "integrity": "sha512-5y8A56jg7XVQx2mbv1lu49NR4dokRnhZYTtL+KGfaa27uq4pSTXkwQkFJl4pkRMyNFz/EtYDSkiiEHx3F7UN6g=="
    },
    "mime-types": {
      "version": "2.1.34",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.34.tgz",
      "integrity": "sha512-6cP692WwGIs9XXdOO4++N+7qjqv0rqxxVvJ3VHPh/Sc9mVZcQP+ZGhkKiTvWMQRr2tbHkJP/Yn7Y0npb3ZBs4A==",
      "requires": {
        "mime-db": "1.51.0"
      }
    },
    "mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
    },
    "min-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
      "integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg=="
    },
    "mini-css-extract-plugin": {
      "version": "2.5.3",
      "resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-2.5.3.tgz",
      "integrity": "sha512-YseMB8cs8U/KCaAGQoqYmfUuhhGW0a9p9XvWXrxVOkE3/IiISTLw4ALNt7JR5B2eYauFM+PQGSbXMDmVbR7Tfw==",
      "requires": {
        "schema-utils": "^4.0.0"
      },
      "dependencies": {
        "ajv": {
          "version": "8.10.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.10.0.tgz",
          "integrity": "sha512-bzqAEZOjkrUMl2afH8dknrq5KEk2SrwdBROR+vH1EKVQTqaUbJVPdc/gEdggTMM0Se+s+Ja4ju4TlNcStKl2Hw==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "ajv-keywords": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
          "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
          "requires": {
            "fast-deep-equal": "^3.1.3"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "schema-utils": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
          "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
          "requires": {
            "@types/json-schema": "^7.0.9",
            "ajv": "^8.8.0",
            "ajv-formats": "^2.1.1",
            "ajv-keywords": "^5.0.0"
          }
        }
      }
    },
    "minimalistic-assert": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
      "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A=="
    },
    "minimatch": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.5.tgz",
      "integrity": "sha512-tUpxzX0VAzJHjLu0xUfFv1gwVp9ba3IOuRAVH2EGuRW8a5emA2FlACLqiT/lDVtS1W+TGNwqz3sWaNyLgDJWuw==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
    },
    "mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "requires": {
        "minimist": "^1.2.5"
      }
    },
    "ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "multicast-dns": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-6.2.3.tgz",
      "integrity": "sha512-ji6J5enbMyGRHIAkAOu3WdV8nggqviKCEKtXcOqfphZZtQrmHKycfynJ2V7eVPUA4NhJ6V7Wf4TmGbTwKE9B6g==",
      "requires": {
        "dns-packet": "^1.3.1",
        "thunky": "^1.0.2"
      }
    },
    "multicast-dns-service-types": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz",
      "integrity": "sha1-iZ8R2WhuXgXLkbNdXw5jt3PPyQE="
    },
    "nanoid": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.2.0.tgz",
      "integrity": "sha512-fmsZYa9lpn69Ad5eDn7FMcnnSR+8R34W9qJEijxYhTbfOWzr22n1QxCMzXLK+ODyW2973V3Fux959iQoUxzUIA=="
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc="
    },
    "negotiator": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
      "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg=="
    },
    "neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw=="
    },
    "no-case": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.4.tgz",
      "integrity": "sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==",
      "requires": {
        "lower-case": "^2.0.2",
        "tslib": "^2.0.3"
      },
      "dependencies": {
        "tslib": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
          "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw=="
        }
      }
    },
    "node-forge": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-1.2.1.tgz",
      "integrity": "sha512-Fcvtbb+zBcZXbTTVwqGA5W+MKBj56UjVRevvchv5XrcyXbmNdesfZL37nlcWOfpgHhgmxApw3tQbTr4CqNmX4w=="
    },
    "node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="
    },
    "node-releases": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.1.tgz",
      "integrity": "sha512-CqyzN6z7Q6aMeF/ktcMVTzhAHCEpf8SOarwpzpf8pNBY2k5/oM34UHldUwp8VKI7uxct2HxSRdJjBaZeESzcxA=="
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
    },
    "normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha1-LRDAa9/TEuqXd2laTShDlFa3WUI="
    },
    "normalize-url": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-6.1.0.tgz",
      "integrity": "sha512-DlL+XwOy3NxAQ8xuC0okPgK46iuVNAK01YN7RueYBqqFeGsBjV9XmCAzAdgt+667bCl5kPh9EqKKDwnaPG1I7A=="
    },
    "npm-run-path": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
      "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
      "requires": {
        "path-key": "^3.0.0"
      }
    },
    "nth-check": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
      "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
      "requires": {
        "boolbase": "~1.0.0"
      }
    },
    "nwsapi": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
      "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
    },
    "object-hash": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-2.2.0.tgz",
      "integrity": "sha512-gScRMn0bS5fH+IuwyIFgnh9zBdo4DV+6GhygmWM9HyNJSgS0hScp1f5vjtm7oIIOiT9trXrShAkLFSc2IqKNgw=="
    },
    "object-inspect": {
      "version": "1.12.0",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.0.tgz",
      "integrity": "sha512-Ho2z80bVIvJloH+YzRmpZVQe87+qASmBUKZDWgx9cu+KDrX2ZDH/3tMy+gXbZETVGs2M8YdxObOh7XAtim9Y0g=="
    },
    "object-is": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.5.tgz",
      "integrity": "sha512-3cyDsyHgtmi7I7DfSSI2LDp6SK2lwvtbg0p0R1e0RvTqF5ceGx+K2dfSjm1bKDMVCFEDAQvy+o8c6a7VujOddw==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      }
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
    },
    "object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      }
    },
    "object.entries": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.5.tgz",
      "integrity": "sha512-TyxmjUoZggd4OrrU1W66FMDG6CuqJxsFvymeyXI51+vQLN67zYfZseptRge703kKQdo4uccgAKebXFcRCzk4+g==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1"
      }
    },
    "object.fromentries": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.5.tgz",
      "integrity": "sha512-CAyG5mWQRRiBU57Re4FKoTBjXfDoNwdFVH2Y1tS9PqCsfUTymAohOkEMSG3aRNKmv4lV3O7p1et7c187q6bynw==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1"
      }
    },
    "object.getownpropertydescriptors": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.3.tgz",
      "integrity": "sha512-VdDoCwvJI4QdC6ndjpqFmoL3/+HxffFBbcJzKi5hwLLqqx3mdbedRpfZDdK0SrOSauj8X4GzBvnDZl4vTN7dOw==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1"
      }
    },
    "object.hasown": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/object.hasown/-/object.hasown-1.1.0.tgz",
      "integrity": "sha512-MhjYRfj3GBlhSkDHo6QmvgjRLXQ2zndabdf3nX0yTyZK9rPfxb6uRpAac8HXNLy1GpqWtZ81Qh4v3uOls2sRAg==",
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1"
      }
    },
    "object.values": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.1.5.tgz",
      "integrity": "sha512-QUZRW0ilQ3PnPpbNtgdNV1PDbEqLIiSFB3l+EnGtBQ/8SUTLj1PZwtQHABZtLgwpJZTSZhuGLOGk57Drx2IvYg==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1"
      }
    },
    "obuf": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
      "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg=="
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "on-headers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA=="
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": {
        "wrappy": "1"
      }
    },
    "onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "requires": {
        "mimic-fn": "^2.1.0"
      }
    },
    "open": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/open/-/open-8.4.0.tgz",
      "integrity": "sha512-XgFPPM+B28FtCCgSb9I+s9szOC1vZRSwgWsRUA5ylIxRTgKozqjOCrVOqGsYABPYK5qnfqClxZTFBa8PKt2v6Q==",
      "requires": {
        "define-lazy-prop": "^2.0.0",
        "is-docker": "^2.1.1",
        "is-wsl": "^2.2.0"
      }
    },
    "optionator": {
      "version": "0.9.1",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.1.tgz",
      "integrity": "sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==",
      "requires": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.3"
      }
    },
    "p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "requires": {
        "yocto-queue": "^0.1.0"
      }
    },
    "p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "requires": {
        "p-limit": "^3.0.2"
      }
    },
    "p-map": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
      "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
      "requires": {
        "aggregate-error": "^3.0.0"
      }
    },
    "p-retry": {
      "version": "4.6.1",
      "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-4.6.1.tgz",
      "integrity": "sha512-e2xXGNhZOZ0lfgR9kL34iGlU8N/KO0xZnQxVEwdeOvpqNDQfdnxIYizvWtK8RglUa3bGqI8g0R/BdfzLMxRkiA==",
      "requires": {
        "@types/retry": "^0.12.0",
        "retry": "^0.13.1"
      }
    },
    "p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
    },
    "param-case": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/param-case/-/param-case-3.0.4.tgz",
      "integrity": "sha512-RXlj7zCYokReqWpOPH9oYivUzLYZ5vAPIfEmCTNViosC78F8F0H9y7T7gG2M39ymgutxF5gcFEsyZQSph9Bp3A==",
      "requires": {
        "dot-case": "^3.0.4",
        "tslib": "^2.0.3"
      },
      "dependencies": {
        "tslib": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
          "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw=="
        }
      }
    },
    "parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "requires": {
        "callsites": "^3.0.0"
      }
    },
    "parse-json": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
      "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "error-ex": "^1.3.1",
        "json-parse-even-better-errors": "^2.3.0",
        "lines-and-columns": "^1.1.6"
      }
    },
    "parse5": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
      "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw=="
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "pascal-case": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/pascal-case/-/pascal-case-3.1.2.tgz",
      "integrity": "sha512-uWlGT3YSnK9x3BQJaOdcZwrnV6hPpd8jFH1/ucpiLRPh/2zCVJKS19E4GvYHvaCcACn3foXZ0cLB9Wrx1KGe5g==",
      "requires": {
        "no-case": "^3.0.4",
        "tslib": "^2.0.3"
      },
      "dependencies": {
        "tslib": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
          "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw=="
        }
      }
    },
    "path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
    },
    "path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q=="
    },
    "path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
    },
    "path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw=="
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns="
    },
    "picocolors": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
      "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ=="
    },
    "picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA=="
    },
    "pirates": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.5.tgz",
      "integrity": "sha512-8V9+HQPupnaXMA23c5hvl69zXvTwTzyAYasnkb0Tts4XvO4CliqONMOnvlq26rkhLC3nWDFBJf73LU1e1VZLaQ=="
    },
    "pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "requires": {
        "find-up": "^4.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "requires": {
            "p-limit": "^2.2.0"
          }
        }
      }
    },
    "pkg-up": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/pkg-up/-/pkg-up-3.1.0.tgz",
      "integrity": "sha512-nDywThFk1i4BQK4twPQ6TA4RT8bDY96yeuCVBWL3ePARCiEKDRSrNGbFIgUJpLp+XeIR65v8ra7WuJOFUBtkMA==",
      "requires": {
        "find-up": "^3.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "requires": {
            "p-limit": "^2.0.0"
          }
        },
        "path-exists": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
          "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
        }
      }
    },
    "portfinder": {
      "version": "1.0.28",
      "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",
      "integrity": "sha512-Se+2isanIcEqf2XMHjyUKskczxbPH7dQnlMjXX6+dybayyHvAf/TCgyMRlzf/B6QDhAEFOGes0pzRo3by4AbMA==",
      "requires": {
        "async": "^2.6.2",
        "debug": "^3.1.1",
        "mkdirp": "^0.5.5"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.7",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
          "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
          "requires": {
            "ms": "^2.1.1"
          }
        }
      }
    },
    "postcss": {
      "version": "8.4.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.6.tgz",
      "integrity": "sha512-OovjwIzs9Te46vlEx7+uXB0PLijpwjXGKXjVGGPIGubGpq7uh5Xgf6D6FiJ/SzJMBosHDp6a2hiXOS97iBXcaA==",
      "requires": {
        "nanoid": "^3.2.0",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      }
    },
    "postcss-attribute-case-insensitive": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/postcss-attribute-case-insensitive/-/postcss-attribute-case-insensitive-5.0.0.tgz",
      "integrity": "sha512-b4g9eagFGq9T5SWX4+USfVyjIb3liPnjhHHRMP7FMB2kFVpYyfEscV0wP3eaXhKlcHKUut8lt5BGoeylWA/dBQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.2"
      }
    },
    "postcss-browser-comments": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/postcss-browser-comments/-/postcss-browser-comments-4.0.0.tgz",
      "integrity": "sha512-X9X9/WN3KIvY9+hNERUqX9gncsgBA25XaeR+jshHz2j8+sYyHktHw1JdKuMjeLpGktXidqDhA7b/qm1mrBDmgg=="
    },
    "postcss-calc": {
      "version": "8.2.4",
      "resolved": "https://registry.npmjs.org/postcss-calc/-/postcss-calc-8.2.4.tgz",
      "integrity": "sha512-SmWMSJmB8MRnnULldx0lQIyhSNvuDl9HfrZkaqqE/WHAhToYsAvDq+yAsA/kIyINDszOp3Rh0GFoNuH5Ypsm3Q==",
      "requires": {
        "postcss-selector-parser": "^6.0.9",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-clamp": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/postcss-clamp/-/postcss-clamp-3.0.0.tgz",
      "integrity": "sha512-QENQMIF/Grw0qX0RzSPJjw+mAiGPIwG2AnsQDIoR/WJ5Q19zLB0NrZX8cH7CzzdDWEerTPGCdep7ItFaAdtItg==",
      "requires": {
        "postcss-value-parser": "^4.1.0"
      }
    },
    "postcss-color-functional-notation": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/postcss-color-functional-notation/-/postcss-color-functional-notation-4.2.2.tgz",
      "integrity": "sha512-DXVtwUhIk4f49KK5EGuEdgx4Gnyj6+t2jBSEmxvpIK9QI40tWrpS2Pua8Q7iIZWBrki2QOaeUdEaLPPa91K0RQ==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-color-hex-alpha": {
      "version": "8.0.3",
      "resolved": "https://registry.npmjs.org/postcss-color-hex-alpha/-/postcss-color-hex-alpha-8.0.3.tgz",
      "integrity": "sha512-fESawWJCrBV035DcbKRPAVmy21LpoyiXdPTuHUfWJ14ZRjY7Y7PA6P4g8z6LQGYhU1WAxkTxjIjurXzoe68Glw==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-color-rebeccapurple": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/postcss-color-rebeccapurple/-/postcss-color-rebeccapurple-7.0.2.tgz",
      "integrity": "sha512-SFc3MaocHaQ6k3oZaFwH8io6MdypkUtEy/eXzXEB1vEQlO3S3oDc/FSZA8AsS04Z25RirQhlDlHLh3dn7XewWw==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-colormin": {
      "version": "5.2.5",
      "resolved": "https://registry.npmjs.org/postcss-colormin/-/postcss-colormin-5.2.5.tgz",
      "integrity": "sha512-+X30aDaGYq81mFqwyPpnYInsZQnNpdxMX0ajlY7AExCexEFkPVV+KrO7kXwayqEWL2xwEbNQ4nUO0ZsRWGnevg==",
      "requires": {
        "browserslist": "^4.16.6",
        "caniuse-api": "^3.0.0",
        "colord": "^2.9.1",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-convert-values": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-convert-values/-/postcss-convert-values-5.0.4.tgz",
      "integrity": "sha512-bugzSAyjIexdObovsPZu/sBCTHccImJxLyFgeV0MmNBm/Lw5h5XnjfML6gzEmJ3A6nyfCW7hb1JXzcsA4Zfbdw==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-custom-media": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/postcss-custom-media/-/postcss-custom-media-8.0.0.tgz",
      "integrity": "sha512-FvO2GzMUaTN0t1fBULDeIvxr5IvbDXcIatt6pnJghc736nqNgsGao5NT+5+WVLAQiTt6Cb3YUms0jiPaXhL//g=="
    },
    "postcss-custom-properties": {
      "version": "12.1.4",
      "resolved": "https://registry.npmjs.org/postcss-custom-properties/-/postcss-custom-properties-12.1.4.tgz",
      "integrity": "sha512-i6AytuTCoDLJkWN/MtAIGriJz3j7UX6bV7Z5t+KgFz+dwZS15/mlTJY1S0kRizlk6ba0V8u8hN50Fz5Nm7tdZw==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-custom-selectors": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/postcss-custom-selectors/-/postcss-custom-selectors-6.0.0.tgz",
      "integrity": "sha512-/1iyBhz/W8jUepjGyu7V1OPcGbc636snN1yXEQCinb6Bwt7KxsiU7/bLQlp8GwAXzCh7cobBU5odNn/2zQWR8Q==",
      "requires": {
        "postcss-selector-parser": "^6.0.4"
      }
    },
    "postcss-dir-pseudo-class": {
      "version": "6.0.4",
      "resolved": "https://registry.npmjs.org/postcss-dir-pseudo-class/-/postcss-dir-pseudo-class-6.0.4.tgz",
      "integrity": "sha512-I8epwGy5ftdzNWEYok9VjW9whC4xnelAtbajGv4adql4FIF09rnrxnA9Y8xSHN47y7gqFIv10C5+ImsLeJpKBw==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "postcss-discard-comments": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/postcss-discard-comments/-/postcss-discard-comments-5.0.3.tgz",
      "integrity": "sha512-6W5BemziRoqIdAKT+1QjM4bNcJAQ7z7zk073730NHg4cUXh3/rQHHj7pmYxUB9aGhuRhBiUf0pXvIHkRwhQP0Q=="
    },
    "postcss-discard-duplicates": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/postcss-discard-duplicates/-/postcss-discard-duplicates-5.0.3.tgz",
      "integrity": "sha512-vPtm1Mf+kp7iAENTG7jI1MN1lk+fBqL5y+qxyi4v3H+lzsXEdfS3dwUZD45KVhgzDEgduur8ycB4hMegyMTeRw=="
    },
    "postcss-discard-empty": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/postcss-discard-empty/-/postcss-discard-empty-5.0.3.tgz",
      "integrity": "sha512-xGJugpaXKakwKI7sSdZjUuN4V3zSzb2Y0LOlmTajFbNinEjTfVs9PFW2lmKBaC/E64WwYppfqLD03P8l9BuueA=="
    },
    "postcss-discard-overridden": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-discard-overridden/-/postcss-discard-overridden-5.0.4.tgz",
      "integrity": "sha512-3j9QH0Qh1KkdxwiZOW82cId7zdwXVQv/gRXYDnwx5pBtR1sTkU4cXRK9lp5dSdiM0r0OICO/L8J6sV1/7m0kHg=="
    },
    "postcss-double-position-gradients": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/postcss-double-position-gradients/-/postcss-double-position-gradients-3.0.5.tgz",
      "integrity": "sha512-XiZzvdxLOWZwtt/1GgHJYGoD9scog/DD/yI5dcvPrXNdNDEv7T53/6tL7ikl+EM3jcerII5/XIQzd1UHOdTi2w==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-env-function": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/postcss-env-function/-/postcss-env-function-4.0.5.tgz",
      "integrity": "sha512-gPUJc71ji9XKyl0WSzAalBeEA/89kU+XpffpPxSaaaZ1c48OL36r1Ep5R6+9XAPkIiDlSvVAwP4io12q/vTcvA==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-flexbugs-fixes": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/postcss-flexbugs-fixes/-/postcss-flexbugs-fixes-5.0.2.tgz",
      "integrity": "sha512-18f9voByak7bTktR2QgDveglpn9DTbBWPUzSOe9g0N4WR/2eSt6Vrcbf0hmspvMI6YWGywz6B9f7jzpFNJJgnQ=="
    },
    "postcss-focus-visible": {
      "version": "6.0.4",
      "resolved": "https://registry.npmjs.org/postcss-focus-visible/-/postcss-focus-visible-6.0.4.tgz",
      "integrity": "sha512-QcKuUU/dgNsstIK6HELFRT5Y3lbrMLEOwG+A4s5cA+fx3A3y/JTq3X9LaOj3OC3ALH0XqyrgQIgey/MIZ8Wczw==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "postcss-focus-within": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-focus-within/-/postcss-focus-within-5.0.4.tgz",
      "integrity": "sha512-vvjDN++C0mu8jz4af5d52CB184ogg/sSxAFS+oUJQq2SuCe7T5U2iIsVJtsCp2d6R4j0jr5+q3rPkBVZkXD9fQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "postcss-font-variant": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/postcss-font-variant/-/postcss-font-variant-5.0.0.tgz",
      "integrity": "sha512-1fmkBaCALD72CK2a9i468mA/+tr9/1cBxRRMXOUaZqO43oWPR5imcyPjXwuv7PXbCid4ndlP5zWhidQVVa3hmA=="
    },
    "postcss-gap-properties": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/postcss-gap-properties/-/postcss-gap-properties-3.0.3.tgz",
      "integrity": "sha512-rPPZRLPmEKgLk/KlXMqRaNkYTUpE7YC+bOIQFN5xcu1Vp11Y4faIXv6/Jpft6FMnl6YRxZqDZG0qQOW80stzxQ=="
    },
    "postcss-image-set-function": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/postcss-image-set-function/-/postcss-image-set-function-4.0.6.tgz",
      "integrity": "sha512-KfdC6vg53GC+vPd2+HYzsZ6obmPqOk6HY09kttU19+Gj1nC3S3XBVEXDHxkhxTohgZqzbUb94bKXvKDnYWBm/A==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-initial": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-initial/-/postcss-initial-4.0.1.tgz",
      "integrity": "sha512-0ueD7rPqX8Pn1xJIjay0AZeIuDoF+V+VvMt/uOnn+4ezUKhZM/NokDeP6DwMNyIoYByuN/94IQnt5FEkaN59xQ=="
    },
    "postcss-js": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.0.tgz",
      "integrity": "sha512-77QESFBwgX4irogGVPgQ5s07vLvFqWr228qZY+w6lW599cRlK/HmnlivnnVUxkjHnCu4J16PDMHcH+e+2HbvTQ==",
      "requires": {
        "camelcase-css": "^2.0.1"
      }
    },
    "postcss-lab-function": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/postcss-lab-function/-/postcss-lab-function-4.0.4.tgz",
      "integrity": "sha512-TAEW8X/ahMYV33mvLFQARtBPAy1VVJsiR9VVx3Pcbu+zlqQj0EIyJ/Ie1/EwxwIt530CWtEDzzTXBDzfdb+qIQ==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-load-config": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-3.1.1.tgz",
      "integrity": "sha512-c/9XYboIbSEUZpiD1UQD0IKiUe8n9WHYV7YFe7X7J+ZwCsEKkUJSFWjS9hBU1RR9THR7jMXst8sxiqP0jjo2mg==",
      "requires": {
        "lilconfig": "^2.0.4",
        "yaml": "^1.10.2"
      }
    },
    "postcss-loader": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-6.2.1.tgz",
      "integrity": "sha512-WbbYpmAaKcux/P66bZ40bpWsBucjx/TTgVVzRZ9yUO8yQfVBlameJ0ZGVaPfH64hNSBh63a+ICP5nqOpBA0w+Q==",
      "requires": {
        "cosmiconfig": "^7.0.0",
        "klona": "^2.0.5",
        "semver": "^7.3.5"
      }
    },
    "postcss-logical": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-logical/-/postcss-logical-5.0.4.tgz",
      "integrity": "sha512-RHXxplCeLh9VjinvMrZONq7im4wjWGlRJAqmAVLXyZaXwfDWP73/oq4NdIp+OZwhQUMj0zjqDfM5Fj7qby+B4g=="
    },
    "postcss-media-minmax": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/postcss-media-minmax/-/postcss-media-minmax-5.0.0.tgz",
      "integrity": "sha512-yDUvFf9QdFZTuCUg0g0uNSHVlJ5X1lSzDZjPSFaiCWvjgsvu8vEVxtahPrLMinIDEEGnx6cBe6iqdx5YWz08wQ=="
    },
    "postcss-merge-longhand": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/postcss-merge-longhand/-/postcss-merge-longhand-5.0.6.tgz",
      "integrity": "sha512-rkmoPwQO6ymJSmWsX6l2hHeEBQa7C4kJb9jyi5fZB1sE8nSCv7sqchoYPixRwX/yvLoZP2y6FA5kcjiByeJqDg==",
      "requires": {
        "postcss-value-parser": "^4.2.0",
        "stylehacks": "^5.0.3"
      }
    },
    "postcss-merge-rules": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/postcss-merge-rules/-/postcss-merge-rules-5.0.6.tgz",
      "integrity": "sha512-nzJWJ9yXWp8AOEpn/HFAW72WKVGD2bsLiAmgw4hDchSij27bt6TF+sIK0cJUBAYT3SGcjtGGsOR89bwkkMuMgQ==",
      "requires": {
        "browserslist": "^4.16.6",
        "caniuse-api": "^3.0.0",
        "cssnano-utils": "^3.0.2",
        "postcss-selector-parser": "^6.0.5"
      }
    },
    "postcss-minify-font-values": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-minify-font-values/-/postcss-minify-font-values-5.0.4.tgz",
      "integrity": "sha512-RN6q3tyuEesvyCYYFCRGJ41J1XFvgV+dvYGHr0CeHv8F00yILlN8Slf4t8XW4IghlfZYCeyRrANO6HpJ948ieA==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-minify-gradients": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/postcss-minify-gradients/-/postcss-minify-gradients-5.0.6.tgz",
      "integrity": "sha512-E/dT6oVxB9nLGUTiY/rG5dX9taugv9cbLNTFad3dKxOO+BQg25Q/xo2z2ddG+ZB1CbkZYaVwx5blY8VC7R/43A==",
      "requires": {
        "colord": "^2.9.1",
        "cssnano-utils": "^3.0.2",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-minify-params": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/postcss-minify-params/-/postcss-minify-params-5.0.5.tgz",
      "integrity": "sha512-YBNuq3Rz5LfLFNHb9wrvm6t859b8qIqfXsWeK7wROm3jSKNpO1Y5e8cOyBv6Acji15TgSrAwb3JkVNCqNyLvBg==",
      "requires": {
        "browserslist": "^4.16.6",
        "cssnano-utils": "^3.0.2",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-minify-selectors": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/postcss-minify-selectors/-/postcss-minify-selectors-5.1.3.tgz",
      "integrity": "sha512-9RJfTiQEKA/kZhMaEXND893nBqmYQ8qYa/G+uPdVnXF6D/FzpfI6kwBtWEcHx5FqDbA79O9n6fQJfrIj6M8jvQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.5"
      }
    },
    "postcss-modules-extract-imports": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-3.0.0.tgz",
      "integrity": "sha512-bdHleFnP3kZ4NYDhuGlVK+CMrQ/pqUm8bx/oGL93K6gVwiclvX5x0n76fYMKuIGKzlABOy13zsvqjb0f92TEXw=="
    },
    "postcss-modules-local-by-default": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-4.0.0.tgz",
      "integrity": "sha512-sT7ihtmGSF9yhm6ggikHdV0hlziDTX7oFoXtuVWeDd3hHObNkcHRo9V3yg7vCAY7cONyxJC/XXCmmiHHcvX7bQ==",
      "requires": {
        "icss-utils": "^5.0.0",
        "postcss-selector-parser": "^6.0.2",
        "postcss-value-parser": "^4.1.0"
      }
    },
    "postcss-modules-scope": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-3.0.0.tgz",
      "integrity": "sha512-hncihwFA2yPath8oZ15PZqvWGkWf+XUfQgUGamS4LqoP1anQLOsOJw0vr7J7IwLpoY9fatA2qiGUGmuZL0Iqlg==",
      "requires": {
        "postcss-selector-parser": "^6.0.4"
      }
    },
    "postcss-modules-values": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-4.0.0.tgz",
      "integrity": "sha512-RDxHkAiEGI78gS2ofyvCsu7iycRv7oqw5xMWn9iMoR0N/7mf9D50ecQqUo5BZ9Zh2vH4bCUR/ktCqbB9m8vJjQ==",
      "requires": {
        "icss-utils": "^5.0.0"
      }
    },
    "postcss-nested": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-5.0.6.tgz",
      "integrity": "sha512-rKqm2Fk0KbA8Vt3AdGN0FB9OBOMDVajMG6ZCf/GoHgdxUJ4sBFp0A/uMIRm+MJUdo33YXEtjqIz8u7DAp8B7DA==",
      "requires": {
        "postcss-selector-parser": "^6.0.6"
      }
    },
    "postcss-nesting": {
      "version": "10.1.2",
      "resolved": "https://registry.npmjs.org/postcss-nesting/-/postcss-nesting-10.1.2.tgz",
      "integrity": "sha512-dJGmgmsvpzKoVMtDMQQG/T6FSqs6kDtUDirIfl4KnjMCiY9/ETX8jdKyCd20swSRAbUYkaBKV20pxkzxoOXLqQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.8"
      }
    },
    "postcss-normalize": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/postcss-normalize/-/postcss-normalize-10.0.1.tgz",
      "integrity": "sha512-+5w18/rDev5mqERcG3W5GZNMJa1eoYYNGo8gB7tEwaos0ajk3ZXAI4mHGcNT47NE+ZnZD1pEpUOFLvltIwmeJA==",
      "requires": {
        "@csstools/normalize.css": "*",
        "postcss-browser-comments": "^4",
        "sanitize.css": "*"
      }
    },
    "postcss-normalize-charset": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/postcss-normalize-charset/-/postcss-normalize-charset-5.0.3.tgz",
      "integrity": "sha512-iKEplDBco9EfH7sx4ut7R2r/dwTnUqyfACf62Unc9UiyFuI7uUqZZtY+u+qp7g8Qszl/U28HIfcsI3pEABWFfA=="
    },
    "postcss-normalize-display-values": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/postcss-normalize-display-values/-/postcss-normalize-display-values-5.0.3.tgz",
      "integrity": "sha512-FIV5FY/qs4Ja32jiDb5mVj5iWBlS3N8tFcw2yg98+8MkRgyhtnBgSC0lxU+16AMHbjX5fbSJgw5AXLMolonuRQ==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-normalize-positions": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-normalize-positions/-/postcss-normalize-positions-5.0.4.tgz",
      "integrity": "sha512-qynirjBX0Lc73ROomZE3lzzmXXTu48/QiEzKgMeqh28+MfuHLsuqC9po4kj84igZqqFGovz8F8hf44hA3dPYmQ==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-normalize-repeat-style": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-normalize-repeat-style/-/postcss-normalize-repeat-style-5.0.4.tgz",
      "integrity": "sha512-Innt+wctD7YpfeDR7r5Ik6krdyppyAg2HBRpX88fo5AYzC1Ut/l3xaxACG0KsbX49cO2n5EB13clPwuYVt8cMA==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-normalize-string": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-normalize-string/-/postcss-normalize-string-5.0.4.tgz",
      "integrity": "sha512-Dfk42l0+A1CDnVpgE606ENvdmksttLynEqTQf5FL3XGQOyqxjbo25+pglCUvziicTxjtI2NLUR6KkxyUWEVubQ==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-normalize-timing-functions": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/postcss-normalize-timing-functions/-/postcss-normalize-timing-functions-5.0.3.tgz",
      "integrity": "sha512-QRfjvFh11moN4PYnJ7hia4uJXeFotyK3t2jjg8lM9mswleGsNw2Lm3I5wO+l4k1FzK96EFwEVn8X8Ojrp2gP4g==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-normalize-unicode": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-normalize-unicode/-/postcss-normalize-unicode-5.0.4.tgz",
      "integrity": "sha512-W79Regn+a+eXTzB+oV/8XJ33s3pDyFTND2yDuUCo0Xa3QSy1HtNIfRVPXNubHxjhlqmMFADr3FSCHT84ITW3ig==",
      "requires": {
        "browserslist": "^4.16.6",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-normalize-url": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/postcss-normalize-url/-/postcss-normalize-url-5.0.5.tgz",
      "integrity": "sha512-Ws3tX+PcekYlXh+ycAt0wyzqGthkvVtZ9SZLutMVvHARxcpu4o7vvXcNoiNKyjKuWecnjS6HDI3fjBuDr5MQxQ==",
      "requires": {
        "normalize-url": "^6.0.1",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-normalize-whitespace": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-normalize-whitespace/-/postcss-normalize-whitespace-5.0.4.tgz",
      "integrity": "sha512-wsnuHolYZjMwWZJoTC9jeI2AcjA67v4UuidDrPN9RnX8KIZfE+r2Nd6XZRwHVwUiHmRvKQtxiqo64K+h8/imaw==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-opacity-percentage": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/postcss-opacity-percentage/-/postcss-opacity-percentage-1.1.2.tgz",
      "integrity": "sha512-lyUfF7miG+yewZ8EAk9XUBIlrHyUE6fijnesuz+Mj5zrIHIEw6KcIZSOk/elVMqzLvREmXB83Zi/5QpNRYd47w=="
    },
    "postcss-ordered-values": {
      "version": "5.0.5",
      "resolved": "https://registry.npmjs.org/postcss-ordered-values/-/postcss-ordered-values-5.0.5.tgz",
      "integrity": "sha512-mfY7lXpq+8bDEHfP+muqibDPhZ5eP9zgBEF9XRvoQgXcQe2Db3G1wcvjbnfjXG6wYsl+0UIjikqq4ym1V2jGMQ==",
      "requires": {
        "cssnano-utils": "^3.0.2",
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-overflow-shorthand": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/postcss-overflow-shorthand/-/postcss-overflow-shorthand-3.0.3.tgz",
      "integrity": "sha512-CxZwoWup9KXzQeeIxtgOciQ00tDtnylYIlJBBODqkgS/PU2jISuWOL/mYLHmZb9ZhZiCaNKsCRiLp22dZUtNsg=="
    },
    "postcss-page-break": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/postcss-page-break/-/postcss-page-break-3.0.4.tgz",
      "integrity": "sha512-1JGu8oCjVXLa9q9rFTo4MbeeA5FMe00/9C7lN4va606Rdb+HkxXtXsmEDrIraQ11fGz/WvKWa8gMuCKkrXpTsQ=="
    },
    "postcss-place": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/postcss-place/-/postcss-place-7.0.4.tgz",
      "integrity": "sha512-MrgKeiiu5OC/TETQO45kV3npRjOFxEHthsqGtkh3I1rPbZSbXGD/lZVi9j13cYh+NA8PIAPyk6sGjT9QbRyvSg==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-preset-env": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/postcss-preset-env/-/postcss-preset-env-7.3.1.tgz",
      "integrity": "sha512-x7fNsJxfkY60P4FUNwhJUOfXBFfnObd2EcUYY97sXZ0XRLgmAE65es9EFIYHq1rAk7X3LMfbG+L9wYgkrNsq5Q==",
      "requires": {
        "@csstools/postcss-font-format-keywords": "^1.0.0",
        "@csstools/postcss-hwb-function": "^1.0.0",
        "@csstools/postcss-is-pseudo-class": "^2.0.0",
        "@csstools/postcss-normalize-display-values": "^1.0.0",
        "autoprefixer": "^10.4.2",
        "browserslist": "^4.19.1",
        "css-blank-pseudo": "^3.0.2",
        "css-has-pseudo": "^3.0.3",
        "css-prefers-color-scheme": "^6.0.3",
        "cssdb": "^6.1.0",
        "postcss-attribute-case-insensitive": "^5.0.0",
        "postcss-clamp": "^3.0.0",
        "postcss-color-functional-notation": "^4.2.1",
        "postcss-color-hex-alpha": "^8.0.2",
        "postcss-color-rebeccapurple": "^7.0.2",
        "postcss-custom-media": "^8.0.0",
        "postcss-custom-properties": "^12.1.4",
        "postcss-custom-selectors": "^6.0.0",
        "postcss-dir-pseudo-class": "^6.0.3",
        "postcss-double-position-gradients": "^3.0.4",
        "postcss-env-function": "^4.0.4",
        "postcss-focus-visible": "^6.0.3",
        "postcss-focus-within": "^5.0.3",
        "postcss-font-variant": "^5.0.0",
        "postcss-gap-properties": "^3.0.2",
        "postcss-image-set-function": "^4.0.5",
        "postcss-initial": "^4.0.1",
        "postcss-lab-function": "^4.0.3",
        "postcss-logical": "^5.0.3",
        "postcss-media-minmax": "^5.0.0",
        "postcss-nesting": "^10.1.2",
        "postcss-opacity-percentage": "^1.1.2",
        "postcss-overflow-shorthand": "^3.0.2",
        "postcss-page-break": "^3.0.4",
        "postcss-place": "^7.0.3",
        "postcss-pseudo-class-any-link": "^7.1.0",
        "postcss-replace-overflow-wrap": "^4.0.0",
        "postcss-selector-not": "^5.0.0"
      }
    },
    "postcss-pseudo-class-any-link": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/postcss-pseudo-class-any-link/-/postcss-pseudo-class-any-link-7.1.1.tgz",
      "integrity": "sha512-JRoLFvPEX/1YTPxRxp1JO4WxBVXJYrSY7NHeak5LImwJ+VobFMwYDQHvfTXEpcn+7fYIeGkC29zYFhFWIZD8fg==",
      "requires": {
        "postcss-selector-parser": "^6.0.9"
      }
    },
    "postcss-reduce-initial": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/postcss-reduce-initial/-/postcss-reduce-initial-5.0.3.tgz",
      "integrity": "sha512-c88TkSnQ/Dnwgb4OZbKPOBbCaauwEjbECP5uAuFPOzQ+XdjNjRH7SG0dteXrpp1LlIFEKK76iUGgmw2V0xeieA==",
      "requires": {
        "browserslist": "^4.16.6",
        "caniuse-api": "^3.0.0"
      }
    },
    "postcss-reduce-transforms": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-reduce-transforms/-/postcss-reduce-transforms-5.0.4.tgz",
      "integrity": "sha512-VIJB9SFSaL8B/B7AXb7KHL6/GNNbbCHslgdzS9UDfBZYIA2nx8NLY7iD/BXFSO/1sRUILzBTfHCoW5inP37C5g==",
      "requires": {
        "postcss-value-parser": "^4.2.0"
      }
    },
    "postcss-replace-overflow-wrap": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/postcss-replace-overflow-wrap/-/postcss-replace-overflow-wrap-4.0.0.tgz",
      "integrity": "sha512-KmF7SBPphT4gPPcKZc7aDkweHiKEEO8cla/GjcBK+ckKxiZslIu3C4GCRW3DNfL0o7yW7kMQu9xlZ1kXRXLXtw=="
    },
    "postcss-selector-not": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/postcss-selector-not/-/postcss-selector-not-5.0.0.tgz",
      "integrity": "sha512-/2K3A4TCP9orP4TNS7u3tGdRFVKqz/E6pX3aGnriPG0jU78of8wsUcqE4QAhWEU0d+WnMSF93Ah3F//vUtK+iQ==",
      "requires": {
        "balanced-match": "^1.0.0"
      }
    },
    "postcss-selector-parser": {
      "version": "6.0.9",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.9.tgz",
      "integrity": "sha512-UO3SgnZOVTwu4kyLR22UQ1xZh086RyNZppb7lLAKBFK8a32ttG5i87Y/P3+2bRSjZNyJ1B7hfFNo273tKe9YxQ==",
      "requires": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      }
    },
    "postcss-svgo": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-svgo/-/postcss-svgo-5.0.4.tgz",
      "integrity": "sha512-yDKHvULbnZtIrRqhZoA+rxreWpee28JSRH/gy9727u0UCgtpv1M/9WEWY3xySlFa0zQJcqf6oCBJPR5NwkmYpg==",
      "requires": {
        "postcss-value-parser": "^4.2.0",
        "svgo": "^2.7.0"
      },
      "dependencies": {
        "css-select": {
          "version": "4.2.1",
          "resolved": "https://registry.npmjs.org/css-select/-/css-select-4.2.1.tgz",
          "integrity": "sha512-/aUslKhzkTNCQUB2qTX84lVmfia9NyjP3WpDGtj/WxhwBzWBYUV3DgUpurHTme8UTPcPlAD1DJ+b0nN/t50zDQ==",
          "requires": {
            "boolbase": "^1.0.0",
            "css-what": "^5.1.0",
            "domhandler": "^4.3.0",
            "domutils": "^2.8.0",
            "nth-check": "^2.0.1"
          }
        },
        "css-tree": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-1.1.3.tgz",
          "integrity": "sha512-tRpdppF7TRazZrjJ6v3stzv93qxRcSsFmW6cX0Zm2NVKpxE1WV1HblnghVv9TreireHkqI/VDEsfolRF1p6y7Q==",
          "requires": {
            "mdn-data": "2.0.14",
            "source-map": "^0.6.1"
          }
        },
        "css-what": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/css-what/-/css-what-5.1.0.tgz",
          "integrity": "sha512-arSMRWIIFY0hV8pIxZMEfmMI47Wj3R/aWpZDDxWYCPEiOMv6tfOrnpDtgxBYPEQD4V0Y/958+1TdC3iWTFcUPw=="
        },
        "dom-serializer": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-1.3.2.tgz",
          "integrity": "sha512-5c54Bk5Dw4qAxNOI1pFEizPSjVsx5+bpJKmL2kPn8JhBUq2q09tTCa3mjijun2NfK78NMouDYNMBkOrPZiS+ig==",
          "requires": {
            "domelementtype": "^2.0.1",
            "domhandler": "^4.2.0",
            "entities": "^2.0.0"
          }
        },
        "domelementtype": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.2.0.tgz",
          "integrity": "sha512-DtBMo82pv1dFtUmHyr48beiuq792Sxohr+8Hm9zoxklYPfa6n0Z3Byjj2IV7bmr2IyqClnqEQhfgHJJ5QF0R5A=="
        },
        "domutils": {
          "version": "2.8.0",
          "resolved": "https://registry.npmjs.org/domutils/-/domutils-2.8.0.tgz",
          "integrity": "sha512-w96Cjofp72M5IIhpjgobBimYEfoPjx1Vx0BSX9P30WBdZW2WIKU0T1Bd0kz2eNZ9ikjKgHbEyKx8BB6H1L3h3A==",
          "requires": {
            "dom-serializer": "^1.0.1",
            "domelementtype": "^2.2.0",
            "domhandler": "^4.2.0"
          }
        },
        "mdn-data": {
          "version": "2.0.14",
          "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.0.14.tgz",
          "integrity": "sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow=="
        },
        "nth-check": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.0.1.tgz",
          "integrity": "sha512-it1vE95zF6dTT9lBsYbxvqh0Soy4SPowchj0UBGj/V6cTPnXXtQOPUbhZ6CmGzAD/rW22LQK6E96pcdJXk4A4w==",
          "requires": {
            "boolbase": "^1.0.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "svgo": {
          "version": "2.8.0",
          "resolved": "https://registry.npmjs.org/svgo/-/svgo-2.8.0.tgz",
          "integrity": "sha512-+N/Q9kV1+F+UeWYoSiULYo4xYSDQlTgb+ayMobAXPwMnLvop7oxKMo9OzIrX5x3eS4L4f2UHhc9axXwY8DpChg==",
          "requires": {
            "@trysound/sax": "0.2.0",
            "commander": "^7.2.0",
            "css-select": "^4.1.3",
            "css-tree": "^1.1.3",
            "csso": "^4.2.0",
            "picocolors": "^1.0.0",
            "stable": "^0.1.8"
          }
        }
      }
    },
    "postcss-unique-selectors": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/postcss-unique-selectors/-/postcss-unique-selectors-5.0.4.tgz",
      "integrity": "sha512-5ampwoSDJCxDPoANBIlMgoBcYUHnhaiuLYJR5pj1DLnYQvMRVyFuTA5C3Bvt+aHtiqWpJkD/lXT50Vo1D0ZsAQ==",
      "requires": {
        "postcss-selector-parser": "^6.0.5"
      }
    },
    "postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ=="
    },
    "prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g=="
    },
    "pretty-bytes": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-5.6.0.tgz",
      "integrity": "sha512-FFw039TmrBqFK8ma/7OL3sDz/VytdtJr044/QUJtH0wK9lb9jLq9tJyIxUwtQJHwar2BqtiA4iCWSwo9JLkzFg=="
    },
    "pretty-error": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/pretty-error/-/pretty-error-4.0.0.tgz",
      "integrity": "sha512-AoJ5YMAcXKYxKhuJGdcvse+Voc6v1RgnsR3nWcYU7q4t6z0Q6T86sv5Zq8VIRbOWWFpvdGE83LtdSMNd+6Y0xw==",
      "requires": {
        "lodash": "^4.17.20",
        "renderkid": "^3.0.0"
      }
    },
    "pretty-format": {
      "version": "27.5.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-27.5.0.tgz",
      "integrity": "sha512-xEi6BRPZ+J1AIS4BAtFC/+rh5jXlXObGZjx5+OSpM95vR/PGla78bFVHMy5GdZjP9wk3AHAMHROXq/r69zXltw==",
      "requires": {
        "ansi-regex": "^5.0.1",
        "ansi-styles": "^5.0.0",
        "react-is": "^17.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
          "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA=="
        },
        "react-is": {
          "version": "17.0.2",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
          "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
        }
      }
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "promise": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/promise/-/promise-8.1.0.tgz",
      "integrity": "sha512-W04AqnILOL/sPRXziNicCjSNRruLAuIHEOVBazepu0545DDNGYHz7ar9ZgZ1fMU8/MA4mVxp5rkBWRi6OXIy3Q==",
      "requires": {
        "asap": "~2.0.6"
      }
    },
    "prompts": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
      "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
      "requires": {
        "kleur": "^3.0.3",
        "sisteransi": "^1.0.5"
      }
    },
    "prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "requires": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "requires": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "dependencies": {
        "ipaddr.js": {
          "version": "1.9.1",
          "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
          "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
        }
      }
    },
    "psl": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
    },
    "q": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/q/-/q-1.5.1.tgz",
      "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc="
    },
    "qs": {
      "version": "6.9.6",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.9.6.tgz",
      "integrity": "sha512-TIRk4aqYLNoJUbd+g2lEdz5kLWIuTMRagAXxl78Q0RiVjAOugHmeKNGdd3cwo/ktpf9aL9epCfFqWDEKysUlLQ=="
    },
    "queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A=="
    },
    "quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA=="
    },
    "raf": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/raf/-/raf-3.4.1.tgz",
      "integrity": "sha512-Sq4CW4QhwOHE8ucn6J34MqtZCeWFP2aQSmrlroYgqAV1PjStIhJXxYuTgUIfkEk7zTLjmIjLmU5q+fbD1NnOJA==",
      "requires": {
        "performance-now": "^2.1.0"
      }
    },
    "randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "requires": {
        "safe-buffer": "^5.1.0"
      }
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "raw-body": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.2.tgz",
      "integrity": "sha512-RPMAFUJP19WIet/99ngh6Iv8fzAbqum4Li7AD6DtGaW2RpMB/11xDoalPiJMTbu6I3hkbMVkATvZrqb9EEqeeQ==",
      "requires": {
        "bytes": "3.1.1",
        "http-errors": "1.8.1",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      },
      "dependencies": {
        "bytes": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.1.tgz",
          "integrity": "sha512-dWe4nWO/ruEOY7HkUJ5gFt1DCFV9zPRoJr8pV0/ASQermOZjtq8jMjOprC0Kd10GLN+l7xaUPvxzJFWtxGu8Fg=="
        }
      }
    },
    "react": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react/-/react-17.0.2.tgz",
      "integrity": "sha512-gnhPt75i/dq/z3/6q/0asP78D0u592D5L1pd7M8P+dck6Fu/jJeL6iVVK23fptSUZj8Vjf++7wXA8UNclGQcbA==",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1"
      }
    },
    "react-app-polyfill": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/react-app-polyfill/-/react-app-polyfill-3.0.0.tgz",
      "integrity": "sha512-sZ41cxiU5llIB003yxxQBYrARBqe0repqPTTYBTmMqTz9szeBbE37BehCE891NZsmdZqqP+xWKdT3eo3vOzN8w==",
      "requires": {
        "core-js": "^3.19.2",
        "object-assign": "^4.1.1",
        "promise": "^8.1.0",
        "raf": "^3.4.1",
        "regenerator-runtime": "^0.13.9",
        "whatwg-fetch": "^3.6.2"
      }
    },
    "react-dev-utils": {
      "version": "12.0.0",
      "resolved": "https://registry.npmjs.org/react-dev-utils/-/react-dev-utils-12.0.0.tgz",
      "integrity": "sha512-xBQkitdxozPxt1YZ9O1097EJiVpwHr9FoAuEVURCKV0Av8NBERovJauzP7bo1ThvuhZ4shsQ1AJiu4vQpoT1AQ==",
      "requires": {
        "@babel/code-frame": "^7.16.0",
        "address": "^1.1.2",
        "browserslist": "^4.18.1",
        "chalk": "^4.1.2",
        "cross-spawn": "^7.0.3",
        "detect-port-alt": "^1.1.6",
        "escape-string-regexp": "^4.0.0",
        "filesize": "^8.0.6",
        "find-up": "^5.0.0",
        "fork-ts-checker-webpack-plugin": "^6.5.0",
        "global-modules": "^2.0.0",
        "globby": "^11.0.4",
        "gzip-size": "^6.0.0",
        "immer": "^9.0.7",
        "is-root": "^2.1.0",
        "loader-utils": "^3.2.0",
        "open": "^8.4.0",
        "pkg-up": "^3.1.0",
        "prompts": "^2.4.2",
        "react-error-overlay": "^6.0.10",
        "recursive-readdir": "^2.2.2",
        "shell-quote": "^1.7.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "escape-string-regexp": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
          "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "loader-utils": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-3.2.0.tgz",
          "integrity": "sha512-HVl9ZqccQihZ7JM85dco1MvO9G+ONvxoGa9rkhzFsneGLKSUg1gJf9bWzhRhcvm2qChhWpebQhP44qxjKIUCaQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "react-dom": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-17.0.2.tgz",
      "integrity": "sha512-s4h96KtLDUQlsENhMn1ar8t2bEa+q/YAtj8pPPdIjPDGBDIVNsrD9aXNWqspUe6AzKCIG0C1HZZLqLV7qpOBGA==",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1",
        "scheduler": "^0.20.2"
      }
    },
    "react-error-overlay": {
      "version": "6.0.10",
      "resolved": "https://registry.npmjs.org/react-error-overlay/-/react-error-overlay-6.0.10.tgz",
      "integrity": "sha512-mKR90fX7Pm5seCOfz8q9F+66VCc1PGsWSBxKbITjfKVQHMNF2zudxHnMdJiB1fRCb+XsbQV9sO9DCkgsMQgBIA=="
    },
    "react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
    },
    "react-refresh": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.11.0.tgz",
      "integrity": "sha512-F27qZr8uUqwhWZboondsPx8tnC3Ct3SxZA3V5WyEvujRyyNv0VYPhoBg1gZ8/MV5tubQp76Trw8lTv9hzRBa+A=="
    },
    "react-scripts": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/react-scripts/-/react-scripts-5.0.0.tgz",
      "integrity": "sha512-3i0L2CyIlROz7mxETEdfif6Sfhh9Lfpzi10CtcGs1emDQStmZfWjJbAIMtRD0opVUjQuFWqHZyRZ9PPzKCFxWg==",
      "requires": {
        "@babel/core": "^7.16.0",
        "@pmmmwh/react-refresh-webpack-plugin": "^0.5.3",
        "@svgr/webpack": "^5.5.0",
        "babel-jest": "^27.4.2",
        "babel-loader": "^8.2.3",
        "babel-plugin-named-asset-import": "^0.3.8",
        "babel-preset-react-app": "^10.0.1",
        "bfj": "^7.0.2",
        "browserslist": "^4.18.1",
        "camelcase": "^6.2.1",
        "case-sensitive-paths-webpack-plugin": "^2.4.0",
        "css-loader": "^6.5.1",
        "css-minimizer-webpack-plugin": "^3.2.0",
        "dotenv": "^10.0.0",
        "dotenv-expand": "^5.1.0",
        "eslint": "^8.3.0",
        "eslint-config-react-app": "^7.0.0",
        "eslint-webpack-plugin": "^3.1.1",
        "file-loader": "^6.2.0",
        "fs-extra": "^10.0.0",
        "fsevents": "^2.3.2",
        "html-webpack-plugin": "^5.5.0",
        "identity-obj-proxy": "^3.0.0",
        "jest": "^27.4.3",
        "jest-resolve": "^27.4.2",
        "jest-watch-typeahead": "^1.0.0",
        "mini-css-extract-plugin": "^2.4.5",
        "postcss": "^8.4.4",
        "postcss-flexbugs-fixes": "^5.0.2",
        "postcss-loader": "^6.2.1",
        "postcss-normalize": "^10.0.1",
        "postcss-preset-env": "^7.0.1",
        "prompts": "^2.4.2",
        "react-app-polyfill": "^3.0.0",
        "react-dev-utils": "^12.0.0",
        "react-refresh": "^0.11.0",
        "resolve": "^1.20.0",
        "resolve-url-loader": "^4.0.0",
        "sass-loader": "^12.3.0",
        "semver": "^7.3.5",
        "source-map-loader": "^3.0.0",
        "style-loader": "^3.3.1",
        "tailwindcss": "^3.0.2",
        "terser-webpack-plugin": "^5.2.5",
        "webpack": "^5.64.4",
        "webpack-dev-server": "^4.6.0",
        "webpack-manifest-plugin": "^4.0.2",
        "workbox-webpack-plugin": "^6.4.1"
      }
    },
    "readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "requires": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      }
    },
    "readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "requires": {
        "picomatch": "^2.2.1"
      }
    },
    "recursive-readdir": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/recursive-readdir/-/recursive-readdir-2.2.2.tgz",
      "integrity": "sha512-nRCcW9Sj7NuZwa2XvH9co8NPeXUBhZP7CRKJtU+cS6PW9FpCIFoI5ib0NT1ZrbNuPoRy0ylyCaUL8Gih4LSyFg==",
      "requires": {
        "minimatch": "3.0.4"
      },
      "dependencies": {
        "minimatch": {
          "version": "3.0.4",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
          "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
          "requires": {
            "brace-expansion": "^1.1.7"
          }
        }
      }
    },
    "redent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-3.0.0.tgz",
      "integrity": "sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==",
      "requires": {
        "indent-string": "^4.0.0",
        "strip-indent": "^3.0.0"
      }
    },
    "regenerate": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
      "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A=="
    },
    "regenerate-unicode-properties": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-10.0.1.tgz",
      "integrity": "sha512-vn5DU6yg6h8hP/2OkQo3K7uVILvY4iu0oI4t3HFa81UPkhGJwkRwM10JEc3upjdhHjs/k8GJY1sRBhk5sr69Bw==",
      "requires": {
        "regenerate": "^1.4.2"
      }
    },
    "regenerator-runtime": {
      "version": "0.13.9",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.9.tgz",
      "integrity": "sha512-p3VT+cOEgxFsRRA9X4lkI1E+k2/CtnKtU4gcxyaCUreilL/vqI6CdZ3wxVUx3UOUg+gnUOQQcRI7BmSI656MYA=="
    },
    "regenerator-transform": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
      "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
      "requires": {
        "@babel/runtime": "^7.8.4"
      }
    },
    "regex-parser": {
      "version": "2.2.11",
      "resolved": "https://registry.npmjs.org/regex-parser/-/regex-parser-2.2.11.tgz",
      "integrity": "sha512-jbD/FT0+9MBU2XAZluI7w2OBs1RBi6p9M83nkoZayQXXU9e8Robt69FcZc7wU4eJD/YFTjn1JdCk3rbMJajz8Q=="
    },
    "regexp.prototype.flags": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.4.1.tgz",
      "integrity": "sha512-pMR7hBVUUGI7PMA37m2ofIdQCsomVnas+Jn5UPGAHQ+/LlwKm/aTLJHdasmHRzlfeZwHiAOaRSo2rbBDm3nNUQ==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      }
    },
    "regexpp": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/regexpp/-/regexpp-3.2.0.tgz",
      "integrity": "sha512-pq2bWo9mVD43nbts2wGv17XLiNLya+GklZ8kaDLV2Z08gDCsGpnKn9BFMepvWuHCbyVvY7J5o5+BVvoQbmlJLg=="
    },
    "regexpu-core": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-5.0.1.tgz",
      "integrity": "sha512-CriEZlrKK9VJw/xQGJpQM5rY88BtuL8DM+AEwvcThHilbxiTAy8vq4iJnd2tqq8wLmjbGZzP7ZcKFjbGkmEFrw==",
      "requires": {
        "regenerate": "^1.4.2",
        "regenerate-unicode-properties": "^10.0.1",
        "regjsgen": "^0.6.0",
        "regjsparser": "^0.8.2",
        "unicode-match-property-ecmascript": "^2.0.0",
        "unicode-match-property-value-ecmascript": "^2.0.0"
      }
    },
    "regjsgen": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.6.0.tgz",
      "integrity": "sha512-ozE883Uigtqj3bx7OhL1KNbCzGyW2NQZPl6Hs09WTvCuZD5sTI4JY58bkbQWa/Y9hxIsvJ3M8Nbf7j54IqeZbA=="
    },
    "regjsparser": {
      "version": "0.8.4",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.8.4.tgz",
      "integrity": "sha512-J3LABycON/VNEu3abOviqGHuB/LOtOQj8SKmfP9anY5GfAVw/SPjwzSjxGjbZXIxbGfqTHtJw58C2Li/WkStmA==",
      "requires": {
        "jsesc": "~0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0="
        }
      }
    },
    "relateurl": {
      "version": "0.2.7",
      "resolved": "https://registry.npmjs.org/relateurl/-/relateurl-0.2.7.tgz",
      "integrity": "sha1-VNvzd+UUQKypCkzSdGANP/LYiKk="
    },
    "renderkid": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/renderkid/-/renderkid-3.0.0.tgz",
      "integrity": "sha512-q/7VIQA8lmM1hF+jn+sFSPWGlMkSAeNYcPLmDQx2zzuiDfaLrOmumR8iaUKlenFgh0XRPIUeSPlH3A+AW3Z5pg==",
      "requires": {
        "css-select": "^4.1.3",
        "dom-converter": "^0.2.0",
        "htmlparser2": "^6.1.0",
        "lodash": "^4.17.21",
        "strip-ansi": "^6.0.1"
      },
      "dependencies": {
        "css-select": {
          "version": "4.2.1",
          "resolved": "https://registry.npmjs.org/css-select/-/css-select-4.2.1.tgz",
          "integrity": "sha512-/aUslKhzkTNCQUB2qTX84lVmfia9NyjP3WpDGtj/WxhwBzWBYUV3DgUpurHTme8UTPcPlAD1DJ+b0nN/t50zDQ==",
          "requires": {
            "boolbase": "^1.0.0",
            "css-what": "^5.1.0",
            "domhandler": "^4.3.0",
            "domutils": "^2.8.0",
            "nth-check": "^2.0.1"
          }
        },
        "css-what": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/css-what/-/css-what-5.1.0.tgz",
          "integrity": "sha512-arSMRWIIFY0hV8pIxZMEfmMI47Wj3R/aWpZDDxWYCPEiOMv6tfOrnpDtgxBYPEQD4V0Y/958+1TdC3iWTFcUPw=="
        },
        "dom-serializer": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-1.3.2.tgz",
          "integrity": "sha512-5c54Bk5Dw4qAxNOI1pFEizPSjVsx5+bpJKmL2kPn8JhBUq2q09tTCa3mjijun2NfK78NMouDYNMBkOrPZiS+ig==",
          "requires": {
            "domelementtype": "^2.0.1",
            "domhandler": "^4.2.0",
            "entities": "^2.0.0"
          }
        },
        "domelementtype": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.2.0.tgz",
          "integrity": "sha512-DtBMo82pv1dFtUmHyr48beiuq792Sxohr+8Hm9zoxklYPfa6n0Z3Byjj2IV7bmr2IyqClnqEQhfgHJJ5QF0R5A=="
        },
        "domutils": {
          "version": "2.8.0",
          "resolved": "https://registry.npmjs.org/domutils/-/domutils-2.8.0.tgz",
          "integrity": "sha512-w96Cjofp72M5IIhpjgobBimYEfoPjx1Vx0BSX9P30WBdZW2WIKU0T1Bd0kz2eNZ9ikjKgHbEyKx8BB6H1L3h3A==",
          "requires": {
            "dom-serializer": "^1.0.1",
            "domelementtype": "^2.2.0",
            "domhandler": "^4.2.0"
          }
        },
        "nth-check": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.0.1.tgz",
          "integrity": "sha512-it1vE95zF6dTT9lBsYbxvqh0Soy4SPowchj0UBGj/V6cTPnXXtQOPUbhZ6CmGzAD/rW22LQK6E96pcdJXk4A4w==",
          "requires": {
            "boolbase": "^1.0.0"
          }
        }
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
    },
    "require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw=="
    },
    "requires-port": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
      "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8="
    },
    "resolve": {
      "version": "1.22.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.0.tgz",
      "integrity": "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==",
      "requires": {
        "is-core-module": "^2.8.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      }
    },
    "resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "requires": {
        "resolve-from": "^5.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
          "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw=="
        }
      }
    },
    "resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g=="
    },
    "resolve-url-loader": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-url-loader/-/resolve-url-loader-4.0.0.tgz",
      "integrity": "sha512-05VEMczVREcbtT7Bz+C+96eUO5HDNvdthIiMB34t7FcF8ehcu4wC0sSgPUubs3XW2Q3CNLJk/BJrCU9wVRymiA==",
      "requires": {
        "adjust-sourcemap-loader": "^4.0.0",
        "convert-source-map": "^1.7.0",
        "loader-utils": "^2.0.0",
        "postcss": "^7.0.35",
        "source-map": "0.6.1"
      },
      "dependencies": {
        "picocolors": {
          "version": "0.2.1",
          "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",
          "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA=="
        },
        "postcss": {
          "version": "7.0.39",
          "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.39.tgz",
          "integrity": "sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==",
          "requires": {
            "picocolors": "^0.2.1",
            "source-map": "^0.6.1"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "resolve.exports": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/resolve.exports/-/resolve.exports-1.1.0.tgz",
      "integrity": "sha512-J1l+Zxxp4XK3LUDZ9m60LRJF/mAe4z6a4xyabPHk7pvK5t35dACV32iIjJDFeWZFfZlO29w6SZ67knR0tHzJtQ=="
    },
    "retry": {
      "version": "0.13.1",
      "resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz",
      "integrity": "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg=="
    },
    "reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw=="
    },
    "rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "rollup": {
      "version": "2.67.1",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-2.67.1.tgz",
      "integrity": "sha512-1Sbcs4OuW+aD+hhqpIRl+RqooIpF6uQcfzU/QSI7vGkwADY6cM4iLsBGRM2CGLXDTDN5y/yShohFmnKegSPWzg==",
      "requires": {
        "fsevents": "~2.3.2"
      }
    },
    "rollup-plugin-terser": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/rollup-plugin-terser/-/rollup-plugin-terser-7.0.2.tgz",
      "integrity": "sha512-w3iIaU4OxcF52UUXiZNsNeuXIMDvFrr+ZXK6bFZ0Q60qyVfq4uLptoS4bbq3paG3x216eQllFZX7zt6TIImguQ==",
      "requires": {
        "@babel/code-frame": "^7.10.4",
        "jest-worker": "^26.2.1",
        "serialize-javascript": "^4.0.0",
        "terser": "^5.0.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "jest-worker": {
          "version": "26.6.2",
          "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.6.2.tgz",
          "integrity": "sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==",
          "requires": {
            "@types/node": "*",
            "merge-stream": "^2.0.0",
            "supports-color": "^7.0.0"
          }
        },
        "serialize-javascript": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-4.0.0.tgz",
          "integrity": "sha512-GaNA54380uFefWghODBWEGisLZFj00nS5ACs6yHa9nLqlLpVLO8ChDGeKRjZnV4Nh4n0Qi7nhYZD/9fCPzEqkw==",
          "requires": {
            "randombytes": "^2.1.0"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "requires": {
        "queue-microtask": "^1.2.2"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "sanitize.css": {
      "version": "13.0.0",
      "resolved": "https://registry.npmjs.org/sanitize.css/-/sanitize.css-13.0.0.tgz",
      "integrity": "sha512-ZRwKbh/eQ6w9vmTjkuG0Ioi3HBwPFce0O+v//ve+aOq1oeCy7jMV2qzzAlpsNuqpqCBjjriM1lbtZbF/Q8jVyA=="
    },
    "sass-loader": {
      "version": "12.4.0",
      "resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-12.4.0.tgz",
      "integrity": "sha512-7xN+8khDIzym1oL9XyS6zP6Ges+Bo2B2xbPrjdMHEYyV3AQYhd/wXeru++3ODHF0zMjYmVadblSKrPrjEkL8mg==",
      "requires": {
        "klona": "^2.0.4",
        "neo-async": "^2.6.2"
      }
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
    },
    "saxes": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-5.0.1.tgz",
      "integrity": "sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==",
      "requires": {
        "xmlchars": "^2.2.0"
      }
    },
    "scheduler": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.20.2.tgz",
      "integrity": "sha512-2eWfGgAqqWFGqtdMmcL5zCMK1U8KlXv8SQFGglL3CEtd0aDVDWgeF/YoCmvln55m5zSk3J/20hTaSBeSObsQDQ==",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1"
      }
    },
    "schema-utils": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.1.1.tgz",
      "integrity": "sha512-Y5PQxS4ITlC+EahLuXaY86TXfR7Dc5lw294alXOq86JAHCihAIZfqv8nNCWvaEJvaC51uN9hbLGeV0cFBdH+Fw==",
      "requires": {
        "@types/json-schema": "^7.0.8",
        "ajv": "^6.12.5",
        "ajv-keywords": "^3.5.2"
      }
    },
    "select-hose": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
      "integrity": "sha1-Yl2GWPhlr0Psliv8N2o3NZpJlMo="
    },
    "selfsigned": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-2.0.0.tgz",
      "integrity": "sha512-cUdFiCbKoa1mZ6osuJs2uDHrs0k0oprsKveFiiaBKCNq3SYyb5gs2HxhQyDNLCmL51ZZThqi4YNDpCK6GOP1iQ==",
      "requires": {
        "node-forge": "^1.2.0"
      }
    },
    "semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "requires": {
        "lru-cache": "^6.0.0"
      }
    },
    "send": {
      "version": "0.17.2",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.2.tgz",
      "integrity": "sha512-UJYB6wFSJE3G00nEivR5rgWp8c2xXvJ3OPWPhmuteU0IKj8nKbG3DrjiOmLwpnHGYWAVwA69zmTm++YG0Hmwww==",
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "1.8.1",
        "mime": "1.6.0",
        "ms": "2.1.3",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          },
          "dependencies": {
            "ms": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
              "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
            }
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "serialize-javascript": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.0.tgz",
      "integrity": "sha512-Qr3TosvguFt8ePWqsvRfrKyQXIiW+nGbYpy8XK24NQHE83caxWt+mIymTT19DGFbNWNLfEwsrkSmN64lVWB9ag==",
      "requires": {
        "randombytes": "^2.1.0"
      }
    },
    "serve-index": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
      "integrity": "sha1-03aNabHn2C5c4FD/9bRTvqEqkjk=",
      "requires": {
        "accepts": "~1.3.4",
        "batch": "0.6.1",
        "debug": "2.6.9",
        "escape-html": "~1.0.3",
        "http-errors": "~1.6.2",
        "mime-types": "~2.1.17",
        "parseurl": "~1.3.2"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "http-errors": {
          "version": "1.6.3",
          "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
          "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",
          "requires": {
            "depd": "~1.1.2",
            "inherits": "2.0.3",
            "setprototypeof": "1.1.0",
            "statuses": ">= 1.4.0 < 2"
          }
        },
        "inherits": {
          "version": "2.0.3",
          "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        },
        "setprototypeof": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
          "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ=="
        }
      }
    },
    "serve-static": {
      "version": "1.14.2",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.2.tgz",
      "integrity": "sha512-+TMNA9AFxUEGuC0z2mevogSnn9MXKb4fa7ngeRMJaaGv8vTwnIEkKi+QGvPt33HSnf8pRS+WGM0EbMtCJLKMBQ==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.2"
      }
    },
    "setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
    },
    "shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "requires": {
        "shebang-regex": "^3.0.0"
      }
    },
    "shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A=="
    },
    "shell-quote": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.3.tgz",
      "integrity": "sha512-Vpfqwm4EnqGdlsBFNmHhxhElJYrdfcxPThu+ryKS5J8L/fhAwLazFZtq+S+TWZ9ANj2piSQLGj6NQg+lKPmxrw=="
    },
    "side-channel": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
      "requires": {
        "call-bind": "^1.0.0",
        "get-intrinsic": "^1.0.2",
        "object-inspect": "^1.9.0"
      }
    },
    "signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ=="
    },
    "sisteransi": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
      "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg=="
    },
    "slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
    },
    "sockjs": {
      "version": "0.3.24",
      "resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.24.tgz",
      "integrity": "sha512-GJgLTZ7vYb/JtPSSZ10hsOYIvEYsjbNU+zPdIHcUaWVNUEPivzxku31865sSSud0Da0W4lEeOPlmw93zLQchuQ==",
      "requires": {
        "faye-websocket": "^0.11.3",
        "uuid": "^8.3.2",
        "websocket-driver": "^0.7.4"
      }
    },
    "source-list-map": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.1.tgz",
      "integrity": "sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw=="
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
    },
    "source-map-js": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",
      "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw=="
    },
    "source-map-loader": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/source-map-loader/-/source-map-loader-3.0.1.tgz",
      "integrity": "sha512-Vp1UsfyPvgujKQzi4pyDiTOnE3E4H+yHvkVRN3c/9PJmQS4CQJExvcDvaX/D+RV+xQben9HJ56jMJS3CgUeWyA==",
      "requires": {
        "abab": "^2.0.5",
        "iconv-lite": "^0.6.3",
        "source-map-js": "^1.0.1"
      },
      "dependencies": {
        "iconv-lite": {
          "version": "0.6.3",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
          "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
          "requires": {
            "safer-buffer": ">= 2.1.2 < 3.0.0"
          }
        }
      }
    },
    "source-map-resolve": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.6.0.tgz",
      "integrity": "sha512-KXBr9d/fO/bWo97NXsPIAW1bFSBOuCnjbNTBMO7N59hsv5i9yzRDfcYwwt0l04+VqnKC+EwzvJZIP/qkuMgR/w==",
      "requires": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0"
      }
    },
    "source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "source-map-url": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw=="
    },
    "sourcemap-codec": {
      "version": "1.4.8",
      "resolved": "https://registry.npmjs.org/sourcemap-codec/-/sourcemap-codec-1.4.8.tgz",
      "integrity": "sha512-9NykojV5Uih4lgo5So5dtw+f0JgJX30KCNI8gwhz2J9A15wD0Ml6tjHKwf6fTSa6fAdVBdZeNOs9eJ71qCk8vA=="
    },
    "spdy": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
      "integrity": "sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==",
      "requires": {
        "debug": "^4.1.0",
        "handle-thing": "^2.0.0",
        "http-deceiver": "^1.2.7",
        "select-hose": "^2.0.0",
        "spdy-transport": "^3.0.0"
      }
    },
    "spdy-transport": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-3.0.0.tgz",
      "integrity": "sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==",
      "requires": {
        "debug": "^4.1.0",
        "detect-node": "^2.0.4",
        "hpack.js": "^2.1.6",
        "obuf": "^1.1.2",
        "readable-stream": "^3.0.6",
        "wbuf": "^1.7.3"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
    },
    "stable": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/stable/-/stable-0.1.8.tgz",
      "integrity": "sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w=="
    },
    "stack-utils": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.5.tgz",
      "integrity": "sha512-xrQcmYhOsn/1kX+Vraq+7j4oE2j/6BFscZ0etmYg81xuM8Gq0022Pxb8+IqgOFUIaxHs0KaSb7T1+OegiNrNFA==",
      "requires": {
        "escape-string-regexp": "^2.0.0"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
          "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w=="
        }
      }
    },
    "stackframe": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/stackframe/-/stackframe-1.2.0.tgz",
      "integrity": "sha512-GrdeshiRmS1YLMYgzF16olf2jJ/IzxXY9lhKOskuVziubpTYcYqyOwYeJKzQkwy7uN0fYSsbsC4RQaXf9LCrYA=="
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
    },
    "string-length": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-4.0.2.tgz",
      "integrity": "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==",
      "requires": {
        "char-regex": "^1.0.2",
        "strip-ansi": "^6.0.0"
      }
    },
    "string-natural-compare": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/string-natural-compare/-/string-natural-compare-3.0.1.tgz",
      "integrity": "sha512-n3sPwynL1nwKi3WJ6AIsClwBMa0zTi54fn2oLU6ndfTSIO05xaznjSf15PcBZU6FNWbmN5Q6cxT4V5hGvB4taw=="
    },
    "string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "requires": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "dependencies": {
        "emoji-regex": {
          "version": "8.0.0",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
        }
      }
    },
    "string.prototype.matchall": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.6.tgz",
      "integrity": "sha512-6WgDX8HmQqvEd7J+G6VtAahhsQIssiZ8zl7zKh1VDMFyL3hRTJP4FTNA3RbIp2TOQ9AYNDcc7e3fH0Qbup+DBg==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.19.1",
        "get-intrinsic": "^1.1.1",
        "has-symbols": "^1.0.2",
        "internal-slot": "^1.0.3",
        "regexp.prototype.flags": "^1.3.1",
        "side-channel": "^1.0.4"
      }
    },
    "string.prototype.trimend": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.4.tgz",
      "integrity": "sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      }
    },
    "string.prototype.trimstart": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.4.tgz",
      "integrity": "sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==",
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      }
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "stringify-object": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/stringify-object/-/stringify-object-3.3.0.tgz",
      "integrity": "sha512-rHqiFh1elqCQ9WPLIC8I0Q/g/wj5J1eMkyoiD6eoQApWHP0FtlK7rqnhmabL5VUY9JQCcqwwvlOaSuutekgyrw==",
      "requires": {
        "get-own-enumerable-property-symbols": "^3.0.0",
        "is-obj": "^1.0.1",
        "is-regexp": "^1.0.0"
      }
    },
    "strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "requires": {
        "ansi-regex": "^5.0.1"
      }
    },
    "strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM="
    },
    "strip-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-comments/-/strip-comments-2.0.1.tgz",
      "integrity": "sha512-ZprKx+bBLXv067WTCALv8SSz5l2+XhpYCsVtSqlMnkAXMWDq+/ekVbl1ghqP9rUHTzv6sm/DwCOiYutU/yp1fw=="
    },
    "strip-final-newline": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA=="
    },
    "strip-indent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-3.0.0.tgz",
      "integrity": "sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==",
      "requires": {
        "min-indent": "^1.0.0"
      }
    },
    "strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig=="
    },
    "style-loader": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-3.3.1.tgz",
      "integrity": "sha512-GPcQ+LDJbrcxHORTRes6Jy2sfvK2kS6hpSfI/fXhPt+spVzxF6LJ1dHLN9zIGmVaaP044YKaIatFaufENRiDoQ=="
    },
    "stylehacks": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/stylehacks/-/stylehacks-5.0.3.tgz",
      "integrity": "sha512-ENcUdpf4yO0E1rubu8rkxI+JGQk4CgjchynZ4bDBJDfqdy+uhTRSWb8/F3Jtu+Bw5MW45Po3/aQGeIyyxgQtxg==",
      "requires": {
        "browserslist": "^4.16.6",
        "postcss-selector-parser": "^6.0.4"
      }
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "supports-hyperlinks": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.2.0.tgz",
      "integrity": "sha512-6sXEzV5+I5j8Bmq9/vUphGRM/RJNT9SCURJLjwfOg51heRtguGWDzcaBlgAzKhQa0EVNpPEKzQuBwZ8S8WaCeQ==",
      "requires": {
        "has-flag": "^4.0.0",
        "supports-color": "^7.0.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w=="
    },
    "svg-parser": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/svg-parser/-/svg-parser-2.0.4.tgz",
      "integrity": "sha512-e4hG1hRwoOdRb37cIMSgzNsxyzKfayW6VOflrwvR+/bzrkyxY/31WkbgnQpgtrNp1SdpJvpUAGTa/ZoiPNDuRQ=="
    },
    "svgo": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/svgo/-/svgo-1.3.2.tgz",
      "integrity": "sha512-yhy/sQYxR5BkC98CY7o31VGsg014AKLEPxdfhora76l36hD9Rdy5NZA/Ocn6yayNPgSamYdtX2rFJdcv07AYVw==",
      "requires": {
        "chalk": "^2.4.1",
        "coa": "^2.0.2",
        "css-select": "^2.0.0",
        "css-select-base-adapter": "^0.1.1",
        "css-tree": "1.0.0-alpha.37",
        "csso": "^4.0.2",
        "js-yaml": "^3.13.1",
        "mkdirp": "~0.5.1",
        "object.values": "^1.1.0",
        "sax": "~1.2.4",
        "stable": "^0.1.8",
        "unquote": "~1.1.1",
        "util.promisify": "~1.0.0"
      }
    },
    "symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw=="
    },
    "tailwindcss": {
      "version": "3.0.19",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.0.19.tgz",
      "integrity": "sha512-rjsdfz/qZya5xQ0OVynEMETgWq1CacmftgMYeXXh6bRM5vxsNwRSbMJsCCIjq/w67om9VP/AFMolOwiE+5VKig==",
      "requires": {
        "arg": "^5.0.1",
        "chalk": "^4.1.2",
        "chokidar": "^3.5.3",
        "color-name": "^1.1.4",
        "cosmiconfig": "^7.0.1",
        "detective": "^5.2.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.2.11",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "normalize-path": "^3.0.0",
        "object-hash": "^2.2.0",
        "postcss-js": "^4.0.0",
        "postcss-load-config": "^3.1.0",
        "postcss-nested": "5.0.6",
        "postcss-selector-parser": "^6.0.9",
        "postcss-value-parser": "^4.2.0",
        "quick-lru": "^5.1.1",
        "resolve": "^1.22.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "tapable": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
      "integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ=="
    },
    "temp-dir": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/temp-dir/-/temp-dir-2.0.0.tgz",
      "integrity": "sha512-aoBAniQmmwtcKp/7BzsH8Cxzv8OL736p7v1ihGb5e9DJ9kTwGWHrQrVB5+lfVDzfGrdRzXch+ig7LHaY1JTOrg=="
    },
    "tempy": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tempy/-/tempy-0.6.0.tgz",
      "integrity": "sha512-G13vtMYPT/J8A4X2SjdtBTphZlrp1gKv6hZiOjw14RCWg6GbHuQBGtjlx75xLbYV/wEc0D7G5K4rxKP/cXk8Bw==",
      "requires": {
        "is-stream": "^2.0.0",
        "temp-dir": "^2.0.0",
        "type-fest": "^0.16.0",
        "unique-string": "^2.0.0"
      },
      "dependencies": {
        "type-fest": {
          "version": "0.16.0",
          "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.16.0.tgz",
          "integrity": "sha512-eaBzG6MxNzEn9kiwvtre90cXaNLkmadMWa1zQMs3XORCXNbsH/OewwbxC5ia9dCxIxnTAsSxXJaa/p5y8DlvJg=="
        }
      }
    },
    "terminal-link": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz",
      "integrity": "sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==",
      "requires": {
        "ansi-escapes": "^4.2.1",
        "supports-hyperlinks": "^2.0.0"
      }
    },
    "terser": {
      "version": "5.10.0",
      "resolved": "https://registry.npmjs.org/terser/-/terser-5.10.0.tgz",
      "integrity": "sha512-AMmF99DMfEDiRJfxfY5jj5wNH/bYO09cniSqhfoyxc8sFoYIgkJy86G04UoZU5VjlpnplVu0K6Tx6E9b5+DlHA==",
      "requires": {
        "commander": "^2.20.0",
        "source-map": "~0.7.2",
        "source-map-support": "~0.5.20"
      },
      "dependencies": {
        "commander": {
          "version": "2.20.3",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
          "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
        },
        "source-map": {
          "version": "0.7.3",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
          "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="
        }
      }
    },
    "terser-webpack-plugin": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.3.1.tgz",
      "integrity": "sha512-GvlZdT6wPQKbDNW/GDQzZFg/j4vKU96yl2q6mcUkzKOgW4gwf1Z8cZToUCrz31XHlPWH8MVb1r2tFtdDtTGJ7g==",
      "requires": {
        "jest-worker": "^27.4.5",
        "schema-utils": "^3.1.1",
        "serialize-javascript": "^6.0.0",
        "source-map": "^0.6.1",
        "terser": "^5.7.2"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "test-exclude": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
      "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
      "requires": {
        "@istanbuljs/schema": "^0.1.2",
        "glob": "^7.1.4",
        "minimatch": "^3.0.4"
      }
    },
    "text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ="
    },
    "throat": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/throat/-/throat-6.0.1.tgz",
      "integrity": "sha512-8hmiGIJMDlwjg7dlJ4yKGLK8EsYqKgPWbG3b4wjJddKNwc7N7Dpn08Df4szr/sZdMVeOstrdYSsqzX6BYbcB+w=="
    },
    "thunky": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz",
      "integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA=="
    },
    "timsort": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/timsort/-/timsort-0.3.0.tgz",
      "integrity": "sha1-QFQRqOfmM5/mTbmiNN4R3DHgK9Q="
    },
    "tmpl": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
      "integrity": "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw=="
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4="
    },
    "to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "requires": {
        "is-number": "^7.0.0"
      }
    },
    "toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="
    },
    "tough-cookie": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-4.0.0.tgz",
      "integrity": "sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg==",
      "requires": {
        "psl": "^1.1.33",
        "punycode": "^2.1.1",
        "universalify": "^0.1.2"
      },
      "dependencies": {
        "universalify": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
          "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
        }
      }
    },
    "tr46": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-2.1.0.tgz",
      "integrity": "sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==",
      "requires": {
        "punycode": "^2.1.1"
      }
    },
    "tryer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tryer/-/tryer-1.0.1.tgz",
      "integrity": "sha512-c3zayb8/kWWpycWYg87P71E1S1ZL6b6IJxfb5fvsUgsf0S2MVGaDhDXXjDMpdCpfWXqptc+4mXwmiy1ypXqRAA=="
    },
    "tsconfig-paths": {
      "version": "3.12.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.12.0.tgz",
      "integrity": "sha512-e5adrnOYT6zqVnWqZu7i/BQ3BnhzvGbjEjejFXO20lKIKpwTaupkCPgEfv4GZK1IBciJUEhYs3J3p75FdaTFVg==",
      "requires": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.1",
        "minimist": "^1.2.0",
        "strip-bom": "^3.0.0"
      },
      "dependencies": {
        "json5": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
          "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
          "requires": {
            "minimist": "^1.2.0"
          }
        }
      }
    },
    "tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
    },
    "tsutils": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.21.0.tgz",
      "integrity": "sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==",
      "requires": {
        "tslib": "^1.8.1"
      }
    },
    "type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "requires": {
        "prelude-ls": "^1.2.1"
      }
    },
    "type-detect": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
      "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g=="
    },
    "type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ=="
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "requires": {
        "is-typedarray": "^1.0.0"
      }
    },
    "unbox-primitive": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.1.tgz",
      "integrity": "sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==",
      "requires": {
        "function-bind": "^1.1.1",
        "has-bigints": "^1.0.1",
        "has-symbols": "^1.0.2",
        "which-boxed-primitive": "^1.0.2"
      }
    },
    "unicode-canonical-property-names-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.0.tgz",
      "integrity": "sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ=="
    },
    "unicode-match-property-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
      "integrity": "sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==",
      "requires": {
        "unicode-canonical-property-names-ecmascript": "^2.0.0",
        "unicode-property-aliases-ecmascript": "^2.0.0"
      }
    },
    "unicode-match-property-value-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-2.0.0.tgz",
      "integrity": "sha512-7Yhkc0Ye+t4PNYzOGKedDhXbYIBe1XEQYQxOPyhcXNMJ0WCABqqj6ckydd6pWRZTHV4GuCPKdBAUiMc60tsKVw=="
    },
    "unicode-property-aliases-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.0.0.tgz",
      "integrity": "sha512-5Zfuy9q/DFr4tfO7ZPeVXb1aPoeQSdeFMLpYuFebehDAhbuevLs5yxSZmIFN1tP5F9Wl4IpJrYojg85/zgyZHQ=="
    },
    "unique-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
      "requires": {
        "crypto-random-string": "^2.0.0"
      }
    },
    "universalify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
      "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ=="
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "unquote": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/unquote/-/unquote-1.1.1.tgz",
      "integrity": "sha1-j97XMk7G6IoP+LkF58CYzcCG1UQ="
    },
    "upath": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg=="
    },
    "uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "util.promisify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.1.tgz",
      "integrity": "sha512-g9JpC/3He3bm38zsLupWryXHoEcS22YHthuPQSJdMy6KNrzIRzWqcsHzD/WUnqe45whVou4VIsPew37DoXWNrA==",
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.2",
        "has-symbols": "^1.0.1",
        "object.getownpropertydescriptors": "^2.1.0"
      }
    },
    "utila": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/utila/-/utila-0.4.0.tgz",
      "integrity": "sha1-ihagXURWV6Oupe7MWxKk+lN5dyw="
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
    },
    "uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg=="
    },
    "v8-compile-cache": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.3.0.tgz",
      "integrity": "sha512-l8lCEmLcLYZh4nbunNZvQCJc5pv7+RCwa8q/LdUx8u7lsWvPDKmpodJAJNwkAhJC//dFY48KuIEmjtd4RViDrA=="
    },
    "v8-to-istanbul": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-8.1.1.tgz",
      "integrity": "sha512-FGtKtv3xIpR6BYhvgH8MI/y78oT7d8Au3ww4QIxymrCtZEh5b8gCw2siywE+puhEmuWKDtmfrvF5UlB298ut3w==",
      "requires": {
        "@types/istanbul-lib-coverage": "^2.0.1",
        "convert-source-map": "^1.6.0",
        "source-map": "^0.7.3"
      },
      "dependencies": {
        "source-map": {
          "version": "0.7.3",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
          "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="
        }
      }
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "w3c-hr-time": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
      "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
      "requires": {
        "browser-process-hrtime": "^1.0.0"
      }
    },
    "w3c-xmlserializer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-2.0.0.tgz",
      "integrity": "sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==",
      "requires": {
        "xml-name-validator": "^3.0.0"
      }
    },
    "walker": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.8.tgz",
      "integrity": "sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==",
      "requires": {
        "makeerror": "1.0.12"
      }
    },
    "watchpack": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.3.1.tgz",
      "integrity": "sha512-x0t0JuydIo8qCNctdDrn1OzH/qDzk2+rdCOC3YzumZ42fiMqmQ7T3xQurykYMhYfHaPHTp4ZxAx2NfUo1K6QaA==",
      "requires": {
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.1.2"
      }
    },
    "wbuf": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
      "integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
      "requires": {
        "minimalistic-assert": "^1.0.0"
      }
    },
    "web-vitals": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/web-vitals/-/web-vitals-2.1.4.tgz",
      "integrity": "sha512-sVWcwhU5mX6crfI5Vd2dC4qchyTqxV8URinzt25XqVh+bHEPGH4C3NPrNionCP7Obx59wrYEbNlw4Z8sjALzZg=="
    },
    "webidl-conversions": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz",
      "integrity": "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w=="
    },
    "webpack": {
      "version": "5.68.0",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-5.68.0.tgz",
      "integrity": "sha512-zUcqaUO0772UuuW2bzaES2Zjlm/y3kRBQDVFVCge+s2Y8mwuUTdperGaAv65/NtRL/1zanpSJOq/MD8u61vo6g==",
      "requires": {
        "@types/eslint-scope": "^3.7.0",
        "@types/estree": "^0.0.50",
        "@webassemblyjs/ast": "1.11.1",
        "@webassemblyjs/wasm-edit": "1.11.1",
        "@webassemblyjs/wasm-parser": "1.11.1",
        "acorn": "^8.4.1",
        "acorn-import-assertions": "^1.7.6",
        "browserslist": "^4.14.5",
        "chrome-trace-event": "^1.0.2",
        "enhanced-resolve": "^5.8.3",
        "es-module-lexer": "^0.9.0",
        "eslint-scope": "5.1.1",
        "events": "^3.2.0",
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.2.9",
        "json-parse-better-errors": "^1.0.2",
        "loader-runner": "^4.2.0",
        "mime-types": "^2.1.27",
        "neo-async": "^2.6.2",
        "schema-utils": "^3.1.0",
        "tapable": "^2.1.1",
        "terser-webpack-plugin": "^5.1.3",
        "watchpack": "^2.3.1",
        "webpack-sources": "^3.2.3"
      },
      "dependencies": {
        "@types/estree": {
          "version": "0.0.50",
          "resolved": "https://registry.npmjs.org/@types/estree/-/estree-0.0.50.tgz",
          "integrity": "sha512-C6N5s2ZFtuZRj54k2/zyRhNDjJwwcViAM3Nbm8zjBpbqAdZ00mr0CFxvSKeO8Y/e03WVFLpQMdHYVfUd6SB+Hw=="
        },
        "eslint-scope": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
          "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
          "requires": {
            "esrecurse": "^4.3.0",
            "estraverse": "^4.1.1"
          }
        },
        "estraverse": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
          "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
        }
      }
    },
    "webpack-dev-middleware": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-5.3.1.tgz",
      "integrity": "sha512-81EujCKkyles2wphtdrnPg/QqegC/AtqNH//mQkBYSMqwFVCQrxM6ktB2O/SPlZy7LqeEfTbV3cZARGQz6umhg==",
      "requires": {
        "colorette": "^2.0.10",
        "memfs": "^3.4.1",
        "mime-types": "^2.1.31",
        "range-parser": "^1.2.1",
        "schema-utils": "^4.0.0"
      },
      "dependencies": {
        "ajv": {
          "version": "8.10.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.10.0.tgz",
          "integrity": "sha512-bzqAEZOjkrUMl2afH8dknrq5KEk2SrwdBROR+vH1EKVQTqaUbJVPdc/gEdggTMM0Se+s+Ja4ju4TlNcStKl2Hw==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "ajv-keywords": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
          "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
          "requires": {
            "fast-deep-equal": "^3.1.3"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "schema-utils": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
          "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
          "requires": {
            "@types/json-schema": "^7.0.9",
            "ajv": "^8.8.0",
            "ajv-formats": "^2.1.1",
            "ajv-keywords": "^5.0.0"
          }
        }
      }
    },
    "webpack-dev-server": {
      "version": "4.7.4",
      "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-4.7.4.tgz",
      "integrity": "sha512-nfdsb02Zi2qzkNmgtZjkrMOcXnYZ6FLKcQwpxT7MvmHKc+oTtDsBju8j+NMyAygZ9GW1jMEUpy3itHtqgEhe1A==",
      "requires": {
        "@types/bonjour": "^3.5.9",
        "@types/connect-history-api-fallback": "^1.3.5",
        "@types/express": "^4.17.13",
        "@types/serve-index": "^1.9.1",
        "@types/sockjs": "^0.3.33",
        "@types/ws": "^8.2.2",
        "ansi-html-community": "^0.0.8",
        "bonjour": "^3.5.0",
        "chokidar": "^3.5.3",
        "colorette": "^2.0.10",
        "compression": "^1.7.4",
        "connect-history-api-fallback": "^1.6.0",
        "default-gateway": "^6.0.3",
        "del": "^6.0.0",
        "express": "^4.17.1",
        "graceful-fs": "^4.2.6",
        "html-entities": "^2.3.2",
        "http-proxy-middleware": "^2.0.0",
        "ipaddr.js": "^2.0.1",
        "open": "^8.0.9",
        "p-retry": "^4.5.0",
        "portfinder": "^1.0.28",
        "schema-utils": "^4.0.0",
        "selfsigned": "^2.0.0",
        "serve-index": "^1.9.1",
        "sockjs": "^0.3.21",
        "spdy": "^4.0.2",
        "strip-ansi": "^7.0.0",
        "webpack-dev-middleware": "^5.3.1",
        "ws": "^8.4.2"
      },
      "dependencies": {
        "ajv": {
          "version": "8.10.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.10.0.tgz",
          "integrity": "sha512-bzqAEZOjkrUMl2afH8dknrq5KEk2SrwdBROR+vH1EKVQTqaUbJVPdc/gEdggTMM0Se+s+Ja4ju4TlNcStKl2Hw==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "ajv-keywords": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
          "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
          "requires": {
            "fast-deep-equal": "^3.1.3"
          }
        },
        "ansi-regex": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
          "integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA=="
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "schema-utils": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
          "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
          "requires": {
            "@types/json-schema": "^7.0.9",
            "ajv": "^8.8.0",
            "ajv-formats": "^2.1.1",
            "ajv-keywords": "^5.0.0"
          }
        },
        "strip-ansi": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.0.1.tgz",
          "integrity": "sha512-cXNxvT8dFNRVfhVME3JAe98mkXDYN2O1l7jmcwMnOslDeESg1rF/OZMtK0nRAhiari1unG5cD4jG3rapUAkLbw==",
          "requires": {
            "ansi-regex": "^6.0.1"
          }
        },
        "ws": {
          "version": "8.5.0",
          "resolved": "https://registry.npmjs.org/ws/-/ws-8.5.0.tgz",
          "integrity": "sha512-BWX0SWVgLPzYwF8lTzEy1egjhS4S4OEAHfsO8o65WOVsrnSRGaSiUaa9e0ggGlkMTtBlmOpEXiie9RUcBO86qg=="
        }
      }
    },
    "webpack-manifest-plugin": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/webpack-manifest-plugin/-/webpack-manifest-plugin-4.1.1.tgz",
      "integrity": "sha512-YXUAwxtfKIJIKkhg03MKuiFAD72PlrqCiwdwO4VEXdRO5V0ORCNwaOwAZawPZalCbmH9kBDmXnNeQOw+BIEiow==",
      "requires": {
        "tapable": "^2.0.0",
        "webpack-sources": "^2.2.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "webpack-sources": {
          "version": "2.3.1",
          "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-2.3.1.tgz",
          "integrity": "sha512-y9EI9AO42JjEcrTJFOYmVywVZdKVUfOvDUPsJea5GIr1JOEGFVqwlY2K098fFoIjOkDzHn2AjRvM8dsBZu+gCA==",
          "requires": {
            "source-list-map": "^2.0.1",
            "source-map": "^0.6.1"
          }
        }
      }
    },
    "webpack-sources": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.2.3.tgz",
      "integrity": "sha512-/DyMEOrDgLKKIG0fmvtz+4dUX/3Ghozwgm6iPp8KRhvn+eQf9+Q7GWxVNMk3+uCPWfdXYC4ExGBckIXdFEfH1w=="
    },
    "websocket-driver": {
      "version": "0.7.4",
      "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.4.tgz",
      "integrity": "sha512-b17KeDIQVjvb0ssuSDF2cYXSg2iztliJ4B9WdsuB6J952qCPKmnVq4DyW5motImXHDC1cBT/1UezrJVsKw5zjg==",
      "requires": {
        "http-parser-js": ">=0.5.1",
        "safe-buffer": ">=5.1.0",
        "websocket-extensions": ">=0.1.1"
      }
    },
    "websocket-extensions": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz",
      "integrity": "sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg=="
    },
    "whatwg-encoding": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
      "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
      "requires": {
        "iconv-lite": "0.4.24"
      }
    },
    "whatwg-fetch": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.6.2.tgz",
      "integrity": "sha512-bJlen0FcuU/0EMLrdbJ7zOnW6ITZLrZMIarMUVmdKtsGvZna8vxKYaexICWPfZ8qwf9fzNq+UEIZrnSaApt6RA=="
    },
    "whatwg-mimetype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
      "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g=="
    },
    "whatwg-url": {
      "version": "8.7.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-8.7.0.tgz",
      "integrity": "sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg==",
      "requires": {
        "lodash": "^4.7.0",
        "tr46": "^2.1.0",
        "webidl-conversions": "^6.1.0"
      }
    },
    "which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "requires": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      }
    },
    "word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ=="
    },
    "workbox-background-sync": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-background-sync/-/workbox-background-sync-6.4.2.tgz",
      "integrity": "sha512-P7c8uG5X2k+DMICH9xeSA9eUlCOjHHYoB42Rq+RtUpuwBxUOflAXR1zdsMWj81LopE4gjKXlTw7BFd1BDAHo7g==",
      "requires": {
        "idb": "^6.1.4",
        "workbox-core": "6.4.2"
      }
    },
    "workbox-broadcast-update": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-broadcast-update/-/workbox-broadcast-update-6.4.2.tgz",
      "integrity": "sha512-qnBwQyE0+PWFFc/n4ISXINE49m44gbEreJUYt2ldGH3+CNrLmJ1egJOOyUqqu9R4Eb7QrXcmB34ClXG7S37LbA==",
      "requires": {
        "workbox-core": "6.4.2"
      }
    },
    "workbox-build": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-build/-/workbox-build-6.4.2.tgz",
      "integrity": "sha512-WMdYLhDIsuzViOTXDH+tJ1GijkFp5khSYolnxR/11zmfhNDtuo7jof72xPGFy+KRpsz6tug39RhivCj77qqO0w==",
      "requires": {
        "@apideck/better-ajv-errors": "^0.3.1",
        "@babel/core": "^7.11.1",
        "@babel/preset-env": "^7.11.0",
        "@babel/runtime": "^7.11.2",
        "@rollup/plugin-babel": "^5.2.0",
        "@rollup/plugin-node-resolve": "^11.2.1",
        "@rollup/plugin-replace": "^2.4.1",
        "@surma/rollup-plugin-off-main-thread": "^2.2.3",
        "ajv": "^8.6.0",
        "common-tags": "^1.8.0",
        "fast-json-stable-stringify": "^2.1.0",
        "fs-extra": "^9.0.1",
        "glob": "^7.1.6",
        "lodash": "^4.17.20",
        "pretty-bytes": "^5.3.0",
        "rollup": "^2.43.1",
        "rollup-plugin-terser": "^7.0.0",
        "source-map": "^0.8.0-beta.0",
        "source-map-url": "^0.4.0",
        "stringify-object": "^3.3.0",
        "strip-comments": "^2.0.1",
        "tempy": "^0.6.0",
        "upath": "^1.2.0",
        "workbox-background-sync": "6.4.2",
        "workbox-broadcast-update": "6.4.2",
        "workbox-cacheable-response": "6.4.2",
        "workbox-core": "6.4.2",
        "workbox-expiration": "6.4.2",
        "workbox-google-analytics": "6.4.2",
        "workbox-navigation-preload": "6.4.2",
        "workbox-precaching": "6.4.2",
        "workbox-range-requests": "6.4.2",
        "workbox-recipes": "6.4.2",
        "workbox-routing": "6.4.2",
        "workbox-strategies": "6.4.2",
        "workbox-streams": "6.4.2",
        "workbox-sw": "6.4.2",
        "workbox-window": "6.4.2"
      },
      "dependencies": {
        "ajv": {
          "version": "8.10.0",
          "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.10.0.tgz",
          "integrity": "sha512-bzqAEZOjkrUMl2afH8dknrq5KEk2SrwdBROR+vH1EKVQTqaUbJVPdc/gEdggTMM0Se+s+Ja4ju4TlNcStKl2Hw==",
          "requires": {
            "fast-deep-equal": "^3.1.1",
            "json-schema-traverse": "^1.0.0",
            "require-from-string": "^2.0.2",
            "uri-js": "^4.2.2"
          }
        },
        "fs-extra": {
          "version": "9.1.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
          "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
          "requires": {
            "at-least-node": "^1.0.0",
            "graceful-fs": "^4.2.0",
            "jsonfile": "^6.0.1",
            "universalify": "^2.0.0"
          }
        },
        "json-schema-traverse": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
          "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug=="
        },
        "source-map": {
          "version": "0.8.0-beta.0",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.8.0-beta.0.tgz",
          "integrity": "sha512-2ymg6oRBpebeZi9UUNsgQ89bhx01TcTkmNTGnNO88imTmbSgy4nfujrgVEFKWpMTEGA11EDkTt7mqObTPdigIA==",
          "requires": {
            "whatwg-url": "^7.0.0"
          }
        },
        "tr46": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
          "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
          "requires": {
            "punycode": "^2.1.0"
          }
        },
        "webidl-conversions": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
          "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg=="
        },
        "whatwg-url": {
          "version": "7.1.0",
          "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
          "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
          "requires": {
            "lodash.sortby": "^4.7.0",
            "tr46": "^1.0.1",
            "webidl-conversions": "^4.0.2"
          }
        }
      }
    },
    "workbox-cacheable-response": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-cacheable-response/-/workbox-cacheable-response-6.4.2.tgz",
      "integrity": "sha512-9FE1W/cKffk1AJzImxgEN0ceWpyz1tqNjZVtA3/LAvYL3AC5SbIkhc7ZCO82WmO9IjTfu8Vut2X/C7ViMSF7TA==",
      "requires": {
        "workbox-core": "6.4.2"
      }
    },
    "workbox-core": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-core/-/workbox-core-6.4.2.tgz",
      "integrity": "sha512-1U6cdEYPcajRXiboSlpJx6U7TvhIKbxRRerfepAJu2hniKwJ3DHILjpU/zx3yvzSBCWcNJDoFalf7Vgd7ey/rw=="
    },
    "workbox-expiration": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-expiration/-/workbox-expiration-6.4.2.tgz",
      "integrity": "sha512-0hbpBj0tDnW+DZOUmwZqntB/8xrXOgO34i7s00Si/VlFJvvpRKg1leXdHHU8ykoSBd6+F2KDcMP3swoCi5guLw==",
      "requires": {
        "idb": "^6.1.4",
        "workbox-core": "6.4.2"
      }
    },
    "workbox-google-analytics": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-google-analytics/-/workbox-google-analytics-6.4.2.tgz",
      "integrity": "sha512-u+gxs3jXovPb1oul4CTBOb+T9fS1oZG+ZE6AzS7l40vnyfJV79DaLBvlpEZfXGv3CjMdV1sT/ltdOrKzo7HcGw==",
      "requires": {
        "workbox-background-sync": "6.4.2",
        "workbox-core": "6.4.2",
        "workbox-routing": "6.4.2",
        "workbox-strategies": "6.4.2"
      }
    },
    "workbox-navigation-preload": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-navigation-preload/-/workbox-navigation-preload-6.4.2.tgz",
      "integrity": "sha512-viyejlCtlKsbJCBHwhSBbWc57MwPXvUrc8P7d+87AxBGPU+JuWkT6nvBANgVgFz6FUhCvRC8aYt+B1helo166g==",
      "requires": {
        "workbox-core": "6.4.2"
      }
    },
    "workbox-precaching": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-precaching/-/workbox-precaching-6.4.2.tgz",
      "integrity": "sha512-CZ6uwFN/2wb4noHVlALL7UqPFbLfez/9S2GAzGAb0Sk876ul9ukRKPJJ6gtsxfE2HSTwqwuyNVa6xWyeyJ1XSA==",
      "requires": {
        "workbox-core": "6.4.2",
        "workbox-routing": "6.4.2",
        "workbox-strategies": "6.4.2"
      }
    },
    "workbox-range-requests": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-range-requests/-/workbox-range-requests-6.4.2.tgz",
      "integrity": "sha512-SowF3z69hr3Po/w7+xarWfzxJX/3Fo0uSG72Zg4g5FWWnHpq2zPvgbWerBZIa81zpJVUdYpMa3akJJsv+LaO1Q==",
      "requires": {
        "workbox-core": "6.4.2"
      }
    },
    "workbox-recipes": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-recipes/-/workbox-recipes-6.4.2.tgz",
      "integrity": "sha512-/oVxlZFpAjFVbY+3PoGEXe8qyvtmqMrTdWhbOfbwokNFtUZ/JCtanDKgwDv9x3AebqGAoJRvQNSru0F4nG+gWA==",
      "requires": {
        "workbox-cacheable-response": "6.4.2",
        "workbox-core": "6.4.2",
        "workbox-expiration": "6.4.2",
        "workbox-precaching": "6.4.2",
        "workbox-routing": "6.4.2",
        "workbox-strategies": "6.4.2"
      }
    },
    "workbox-routing": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-routing/-/workbox-routing-6.4.2.tgz",
      "integrity": "sha512-0ss/n9PAcHjTy4Ad7l2puuod4WtsnRYu9BrmHcu6Dk4PgWeJo1t5VnGufPxNtcuyPGQ3OdnMdlmhMJ57sSrrSw==",
      "requires": {
        "workbox-core": "6.4.2"
      }
    },
    "workbox-strategies": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-strategies/-/workbox-strategies-6.4.2.tgz",
      "integrity": "sha512-YXh9E9dZGEO1EiPC3jPe2CbztO5WT8Ruj8wiYZM56XqEJp5YlGTtqRjghV+JovWOqkWdR+amJpV31KPWQUvn1Q==",
      "requires": {
        "workbox-core": "6.4.2"
      }
    },
    "workbox-streams": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-streams/-/workbox-streams-6.4.2.tgz",
      "integrity": "sha512-ROEGlZHGVEgpa5bOZefiJEVsi5PsFjJG9Xd+wnDbApsCO9xq9rYFopF+IRq9tChyYzhBnyk2hJxbQVWphz3sog==",
      "requires": {
        "workbox-core": "6.4.2",
        "workbox-routing": "6.4.2"
      }
    },
    "workbox-sw": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-sw/-/workbox-sw-6.4.2.tgz",
      "integrity": "sha512-A2qdu9TLktfIM5NE/8+yYwfWu+JgDaCkbo5ikrky2c7r9v2X6DcJ+zSLphNHHLwM/0eVk5XVf1mC5HGhYpMhhg=="
    },
    "workbox-webpack-plugin": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-webpack-plugin/-/workbox-webpack-plugin-6.4.2.tgz",
      "integrity": "sha512-CiEwM6kaJRkx1cP5xHksn13abTzUqMHiMMlp5Eh/v4wRcedgDTyv6Uo8+Hg9MurRbHDosO5suaPyF9uwVr4/CQ==",
      "requires": {
        "fast-json-stable-stringify": "^2.1.0",
        "pretty-bytes": "^5.4.1",
        "source-map-url": "^0.4.0",
        "upath": "^1.2.0",
        "webpack-sources": "^1.4.3",
        "workbox-build": "6.4.2"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "webpack-sources": {
          "version": "1.4.3",
          "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
          "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
          "requires": {
            "source-list-map": "^2.0.0",
            "source-map": "~0.6.1"
          }
        }
      }
    },
    "workbox-window": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/workbox-window/-/workbox-window-6.4.2.tgz",
      "integrity": "sha512-KVyRKmrJg7iB+uym/B/CnEUEFG9CvnTU1Bq5xpXHbtgD9l+ShDekSl1wYpqw/O0JfeeQVOFb8CiNfvnwWwqnWQ==",
      "requires": {
        "@types/trusted-types": "^2.0.2",
        "workbox-core": "6.4.2"
      }
    },
    "wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "requires": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        }
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "requires": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "ws": {
      "version": "7.5.7",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.7.tgz",
      "integrity": "sha512-KMvVuFzpKBuiIXW3E4u3mySRO2/mCHSyZDJQM5NQ9Q9KHWHWh0NHgfbRMLLrceUK5qAL4ytALJbpRMjixFZh8A=="
    },
    "xml-name-validator": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
      "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw=="
    },
    "xmlchars": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
      "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw=="
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
    },
    "y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA=="
    },
    "yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
    },
    "yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg=="
    },
    "yargs": {
      "version": "16.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
      "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
      "requires": {
        "cliui": "^7.0.2",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^20.2.2"
      }
    },
    "yargs-parser": {
      "version": "20.2.9",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
      "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w=="
    },
    "yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q=="
    }
  }
}

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)