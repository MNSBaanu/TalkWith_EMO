import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads and shows headline', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Talk With EMO/i })).toBeVisible();
  });

  test('shows Start Exploring button', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Start Exploring/i })).toBeVisible();
  });

  test('Start Exploring scrolls to Joy section', async ({ page }) => {
    await page.getByRole('button', { name: /Start Exploring/i }).click();
    await expect(page.locator('#emotion-joy')).toBeInViewport({ timeout: 3000 });
  });
});

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('header nav links are visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Joy/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Sadness/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Anger/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Fear/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Disgust/i }).first()).toBeVisible();
  });

  test('clicking Joy in nav scrolls to Joy section', async ({ page }) => {
    await page.getByRole('button', { name: /^Joy$/i }).first().click();
    await expect(page.locator('#emotion-joy')).toBeInViewport({ timeout: 3000 });
  });
});

test.describe('Emotion Sections', () => {
  const emotions = ['joy', 'sadness', 'anger', 'fear', 'disgust'];

  for (const emotion of emotions) {
    test(`${emotion} section exists and has Talk button`, async ({ page }) => {
      await page.goto('/');
      await page.locator(`#emotion-${emotion}`).scrollIntoViewIfNeeded();
      await expect(page.locator(`#emotion-${emotion}`)).toBeVisible();
      await expect(
        page.locator(`#emotion-${emotion}`).getByRole('button', { name: /Talk to/i })
      ).toBeVisible();
    });
  }
});

test.describe('Chat Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#emotion-joy').scrollIntoViewIfNeeded();
    await page.locator('#emotion-joy').getByRole('button', { name: /Talk to Joy/i }).click();
  });

  test('chat modal opens', async ({ page }) => {
    await expect(page.getByText('Joy — EMO')).toBeVisible();
  });

  test('greeting message appears', async ({ page }) => {
    await expect(page.getByText(/Hello, I am Joy/i)).toBeVisible();
  });

  test('user can send a message and get a response', async ({ page }) => {
    await page.getByPlaceholder(/Share what you are feeling/i).fill('I am feeling happy today');
    await page.getByRole('button', { name: /Send/i }).click();
    await expect(page.getByText('I am feeling happy today')).toBeVisible();
    // Wait for EMO response
    await expect(page.locator('.justify-start').last()).toBeVisible({ timeout: 5000 });
  });

  test('modal closes on X button', async ({ page }) => {
    await page.getByRole('button', { name: '✕' }).click();
    await expect(page.getByText('Joy — EMO')).not.toBeVisible();
  });

  test('New conversation resets chat', async ({ page }) => {
    await page.getByRole('button', { name: /New conversation/i }).click();
    await expect(page.getByText(/Hello, I am Joy/i)).toBeVisible();
  });
});

test.describe('Emotion Quiz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#find-emotion').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /Discover my emotion/i }).click();
  });

  test('quiz modal opens with first question', async ({ page }) => {
    await expect(page.getByText(/Question 1 of 3/i)).toBeVisible();
  });

  test('progress bar advances through questions', async ({ page }) => {
    await page.getByText(/Light & energized/i).click();
    await expect(page.getByText(/Question 2 of 3/i)).toBeVisible();
    await page.getByText(/Good memories/i).click();
    await expect(page.getByText(/Question 3 of 3/i)).toBeVisible();
  });

  test('completes quiz and shows result', async ({ page }) => {
    await page.getByText(/Light & energized/i).click();
    await page.getByText(/Good memories/i).click();
    await page.getByText(/To celebrate/i).click();
    await expect(page.getByText(/You're feeling/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Talk to.*EMO/i })).toBeVisible();
  });

  test('retake resets quiz', async ({ page }) => {
    await page.getByText(/Light & energized/i).click();
    await page.getByText(/Good memories/i).click();
    await page.getByText(/To celebrate/i).click();
    await page.getByRole('button', { name: /Retake/i }).click();
    await expect(page.getByText(/Question 1 of 3/i)).toBeVisible();
  });
});
