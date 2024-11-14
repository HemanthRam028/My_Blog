import { renderHook, act } from '@testing-library/react-hooks';
import { usePosts } from '../usePosts';

describe('usePosts', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should add a new post', () => {
    const { result } = renderHook(() => usePosts());

    act(() => {
      result.current.addPost({
        title: 'Test Post',
        content: 'Test Content'
      });
    });

    expect(result.current.posts).toHaveLength(1);
    expect(result.current.posts[0].title).toBe('Test Post');
    expect(result.current.posts[0].content).toBe('Test Content');
  });

  test('should update an existing post', () => {
    const { result } = renderHook(() => usePosts());

    act(() => {
      result.current.addPost({
        title: 'Initial Post',
        content: 'Initial Content'
      });
    });

    const postId = result.current.posts[0].id;

    act(() => {
      result.current.updatePost(postId, {
        title: 'Updated Post',
        content: 'Updated Content'
      });
    });

    expect(result.current.posts).toHaveLength(1);
    expect(result.current.posts[0].title).toBe('Updated Post');
    expect(result.current.posts[0].content).toBe('Updated Content');
  });

  test('should delete a post', () => {
    const { result } = renderHook(() => usePosts());

    act(() => {
      result.current.addPost({
        title: 'Post to be deleted',
        content: 'Delete this content'
      });
    });

    const postId = result.current.posts[0].id;

    act(() => {
      result.current.deletePost(postId);
    });

    expect(result.current.posts).toHaveLength(0);
  });

  test('should persist posts in localStorage', () => {
    const { result, unmount } = renderHook(() => usePosts());

    act(() => {
      result.current.addPost({
        title: 'Persisted Post',
        content: 'Persisted Content'
      });
    });

    // Unmount and re-render hook to simulate a page reload
    unmount();
    const { result: newResult } = renderHook(() => usePosts());

    expect(newResult.current.posts).toHaveLength(1);
    expect(newResult.current.posts[0].title).toBe('Persisted Post');
  });

  test('should load posts from localStorage on initial render', () => {
    const postData = [
      { id: 1, title: 'Stored Post 1', content: 'Stored Content 1' },
      { id: 2, title: 'Stored Post 2', content: 'Stored Content 2' }
    ];
    localStorage.setItem('posts', JSON.stringify(postData));

    const { result } = renderHook(() => usePosts());

    expect(result.current.posts).toHaveLength(2);
    expect(result.current.posts[0].title).toBe('Stored Post 1');
    expect(result.current.posts[1].title).toBe('Stored Post 2');
  });
});
