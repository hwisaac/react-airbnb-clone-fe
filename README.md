# 챌린지
- sign-up 폼 기능 완성시키기 (로그인 폼 참고)
- KakaoConfirm, GithubConfirm 스크린을 리팩토링 하기 (useMutation 사용)


# Note

cloudflare에 이미지 업로드 하고, be 에 업로드 할 때, `uploadImageMutation`:

src/routes/UploadPhotos.tsx
```ts
const uploadImageMutation = useMutation(uploadImage, {
    onSuccess: ({ result }: any) => {
      if (roomPk) {
        createPhotoMutation.mutate({
          description: 'I love react',
          file: `https://imagedelivery.net/${process.env.REACT_APP_CF_HASH}/${result.id}/public`,
          roomPk,
        });
      }
    },
  });
```